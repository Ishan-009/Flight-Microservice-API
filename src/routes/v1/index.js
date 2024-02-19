const express = require("express");
const { InfoController } = require("../../controller");
const router = express.Router();
const airplaneRoutes = require("./airplane-routes");
router.use("/airplanes", airplaneRoutes);

module.exports = router;
