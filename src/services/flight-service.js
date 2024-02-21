const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories/index");

const flightRepository = new FlightRepository();
const AppError = require("../utils/errors/app-error");
const { compareTime } = require("../utils/helpers/datetime-helper");
async function createFlight(data) {
  try {
    const isValidTime = compareTime(data.arrivalTime, data.deperatureTime);
    const flight = await flightRepository.create(data);
    if (!isValidTime) {
      const ErrorResponse = new AppError(
        "Arrival Time should be greater than Departure Time",
        StatusCodes.BAD_REQUEST
      );

      return { error: ErrorResponse, data: null };
    }

    return flight;
  } catch (error) {
    console.log(error);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.foreach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    } else {
      throw new AppError(
        "Cannot Create instance of an flight",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = {
  createFlight,
};
