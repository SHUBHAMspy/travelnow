import CustomError from "../utils/error";

export default (err,req,res,next) => {
    let error = {...err};
    error.statusCode = err.statusCode || 500;

    error.message = err.message;

    // Catching wrong mongoose Object Id error
    if(err.name === 'CastError'){
        const message = `Resource not found. Invalid:${error.path}`;
        error = new CustomError(message,400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(error.errors).map(value => value.message);
        error = new CustomError(message,400);

    }

    res.status(error.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })

}