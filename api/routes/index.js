const express = require('express');
const companiesRoute = require('./companiesRoute');

function routerApi(app){
  const router = express.Router();
   app.use('/api/v1', router);
    router.use('/companies', companiesRoute);
}

module.exports = routerApi;
