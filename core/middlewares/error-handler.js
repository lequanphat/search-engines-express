const logger = require("../../config/logger");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  logger.error(message);
  res.status(statusCode).json({
    statusCode,
    message,
  });
};

module.exports = errorHandler;
