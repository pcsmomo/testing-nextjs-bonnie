import { testApiHandler } from "next-test-api-route-handler";

import { validateToken } from "@/lib/auth/utils";
import reservationHandler from "@/pages/api/reservations/[reservationId]";
import userReservationsHandler from "@/pages/api/users/[userId]/reservations";

jest.mock("@/lib/auth/utils");
const mockValidateToken = validateToken as jest.Mock;

test("POST /api/reservations/[reservationId] creates a reservation", async () => {
  await testApiHandler({
    handler: reservationHandler,
    paramsPatcher: (params) => {
      // eslint-disable-next-line no-param-reassign
      params.reservationId = 12345;
    },
    test: async ({ fetch }) => {
      const res = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Must use correct content type
        },
        body: JSON.stringify({
          seatCount: 5,
          userId: 1,
          showId: 0,
        }),
      });
      expect(res.status).toBe(201);
    },
  });
  await testApiHandler({
    handler: userReservationsHandler,
    paramsPatcher: (params) => {
      // eslint-disable-next-line no-param-reassign
      params.userId = 1;
    },
    test: async ({ fetch }) => {
      const res = await fetch({ method: "GET" });
      expect(res.status).toBe(200);
      const json = await res.json();

      expect(json.userReservations).toHaveLength(3);
    },
  });
});

test("POST /api/reservations/[reservationId] return 401 status when not authorized", async () => {
  mockValidateToken.mockResolvedValue(false);

  await testApiHandler({
    handler: reservationHandler,
    paramsPatcher: (params) => {
      // eslint-disable-next-line no-param-reassign
      params.reservationId = 12345;
    },
    test: async ({ fetch }) => {
      const res = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Must use correct content type
        },
        body: JSON.stringify({
          seatCount: 5,
          userId: 1,
          showId: 0,
        }),
      });

      // expect unauthorized
      expect(res.status).toBe(401);
    },
  });
});
