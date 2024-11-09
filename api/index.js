const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');
const {errorHandler, boomErrorHandler  } = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());
routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>console.log(`escuchando en port ${port}`));
