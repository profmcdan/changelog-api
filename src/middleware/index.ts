export const customMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}
