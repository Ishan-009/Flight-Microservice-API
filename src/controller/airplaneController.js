const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const {
  SuccessResponse,
  ErrorResponse,
} = require("../utils/errors/common/index");
async function createAirplane(req, res) {
  try {
    console.log("Request Body:", req.body);

    const response = await AirplaneService.createAicdrPlane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    console.log("Service Response:", response);

    SuccessResponse.message = "Successfully Created an Airplane";
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const response = await AirplaneService.getAirplanes();

    SuccessResponse.message = "Successfully Fetched all Airplanes";
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
