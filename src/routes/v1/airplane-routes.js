const express = require("express");
const { AirplaneController } = require("../../controller");
const router = express.Router();
const { AirplaneMiddleware } = require("../../middleware/index");

router.post(
  "/",
  AirplaneMiddleware.validateCreateRequest,
  AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAirplanes);

// Export the router
module.exports = router;
