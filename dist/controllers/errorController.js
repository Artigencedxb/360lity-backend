"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const sendErrorDev_1 = require("../utils/sendErrorDev");
const appError_1 = require("./../utils/appError");
const sendErrorProd_1 = require("../utils/sendErrorProd");
const HandleValidationErrorDB = (err) => {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join(",")}`;
    return new appError_1.AppError(message, 400);
};
const HandleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new appError_1.AppError(message, 400);
};
const HandleDuplicateFieldsDB = (err) => {
    let errorField = Object.values(err.keyValue)[0];
    let errorFieldName = Object.keys(err.keyValue)[0];
    console.log(errorField, "errorField");
    const message = `Duplicate ${err.keyValue ? errorFieldName : "Field Value"}: ${errorField}, Please use another value`;
    if (errorField) {
        return new appError_1.AppError(message, 400);
    }
    else {
        return new appError_1.AppError(err.message, 400);
    }
};
const HandleJWTErrorDB = (err) => {
    const message = `Invalid token. Please login again!`;
    return new appError_1.AppError(message, 401);
};
const HandleTokenExpiredErrorDB = (err) => {
    const message = `Your token has been expired. Please login again!`;
    return new appError_1.AppError(message, 401);
};
const GlobalError = (err, req, res, next) => {
    let error = err;
    console.log(error, "err");
    error.statusCode = err.statusCode || 500;
    error.status = err.status || "error";
    if (process.env.NODE_ENV === "development") {
        if (err.name === "ValidationError" || err.errors)
            error = HandleValidationErrorDB(err);
        if (err.code === 11000)
            error = HandleDuplicateFieldsDB(err);
        if (err.name === "JsonWebTokenError")
            error = HandleJWTErrorDB(err);
        if (err.name === "CastError")
            error = HandleCastErrorDB(err);
        if (err.name === "TokenExpiredError")
            error = HandleTokenExpiredErrorDB(err);
        (0, sendErrorDev_1.sendErrorDev)(error, res);
    }
    else if (process.env.NODE_ENV === "production") {
        if (err.name === "ValidationError" || err.errors)
            error = HandleValidationErrorDB(err);
        if (err.name === "CastError")
            error = HandleCastErrorDB(err);
        if (err.name === "JsonWebTokenError")
            error = HandleJWTErrorDB(err);
        if (err.name === "TokenExpiredError")
            error = HandleTokenExpiredErrorDB(err);
        if (err.code === 11000)
            error = HandleDuplicateFieldsDB(err);
        (0, sendErrorProd_1.sendErrorProd)(error, res);
    }
};
exports.GlobalError = GlobalError;
//# sourceMappingURL=errorController.js.map