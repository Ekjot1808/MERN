
export const errorMiddleware = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const extraDetails = error.extraDetails || "BACKEND ERROR";
    const message = error.message || "Internal server error";
    res.status(status).json({ status, message, extraDetails });
}