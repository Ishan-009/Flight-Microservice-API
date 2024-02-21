const express = require("express");
const { FlightController } = require("../../controller");
const router = express.Router();
const { FlightMiddleware } = require("../../middleware/index");

router.post(
  "/",
  FlightMiddleware.validateCreateRequest,
  FlightController.createFlight
);

// router.get("/", AirportController.getAirports);
// router.get("/:id", AirportController.getAirport);
// router.delete("/:id", AirportController.deleteAirport);
// router.put(
//   "/:id",
//   AirportMiddleware.validateCreateRequest,
//   AirportController.updateAirport
// );

// Export the router
module.exports = router;
