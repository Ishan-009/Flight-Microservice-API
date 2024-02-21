const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const {
  SuccessResponse,
  ErrorResponse,
} = require("../utils/errors/common/index");
async function createFlight(req, res) {
  try {
    const response = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });

    if (response.error) {
      return res
        .status(response.error.statusCode)
        .json({ success: false, error: response.error });
    }

    SuccessResponse.message = "Successfully Created an Flight";
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
};
