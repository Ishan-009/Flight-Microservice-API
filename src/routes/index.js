const express = require("express");
const router = express.Router();
const v1Routes = require("./v1/index");
const v2Routes = require("./v2/index");
const airplaneRoutes = require("./v1/airplane-routes");

router.use("/v1", v1Routes);
router.use("/v2", v2Routes);
module.exports = router;
