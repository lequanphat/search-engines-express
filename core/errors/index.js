const { ERROR_STATUS } = require("../../config/constants");
class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends HttpError {
  constructor(message = "Bad Request") {
    super(message);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(message, ERROR_STATUS.UNAUTHORIZED);
  }
}

class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(message, ERROR_STATUS.FORBIDDEN);
  }
}

class NotFoundError extends HttpError {
  constructor(message = "Not Found") {
    super(message, ERROR_STATUS.NOT_FOUND);
  }
}

class InternalServerError extends HttpError {
  constructor(message = "Internal Server Error") {
    super(message, ERROR_STATUS.INTERNAL_SERVER);
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
};
