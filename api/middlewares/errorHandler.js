const { stack } = require("../routes/companiesRoute");

function errorHandler(err, req, res, next){
  res.json({
    err: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else{
    next(err);
  }
}

module.exports = {errorHandler, boomErrorHandler };
