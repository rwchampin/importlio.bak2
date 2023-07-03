class BaseError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  class AppError extends BaseError {
    constructor(message) {
      super(message);
      this.code = 'APP_ERROR';
    }
  }
  
  class ValidationError extends BaseError {
    constructor(message, field) {
      super(message);
      this.code = 'VALIDATION_ERROR';
      this.field = field;
    }
  }
  
  // Usage example
  try {
    if (!isValid) {
      throw new ValidationError('Invalid input', 'email');
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log('Validation error:', error.message);
      console.log('Field:', error.field);
    } else if (error instanceof AppError) {
      console.log('App error:', error.message);
    } else {
      console.log('Unknown error:', error.message);
    }
  }
  