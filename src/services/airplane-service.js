const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories/index");

const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/errors/app-error");
async function createAirPlane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      console.log(error);
      error.errors.foreach((err) => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
  }
}

async function getAirplanes() {
  try {
    const airplane = await airplaneRepository.getAll();
    return airplane;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirPlane,
  getAirplanes,
};
