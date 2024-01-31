const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Problem';
  return res.status(statusCode).json({ error: message });
};

export default errorHandler;
