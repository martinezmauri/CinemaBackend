class GlobalMiddleware {
  static logEndpoint(req, res, next) {
    console.log(
      `Se está ejecutando el endpoint: ${req.method} ${req.originalUrl}`
    );
    next();
  }
}

export default GlobalMiddleware;
