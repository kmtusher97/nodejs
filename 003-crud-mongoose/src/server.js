const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const appConfig = require('./config/config');
const productRouter = require('./router/productRouter');
const { errorHandler } = require('./middleware/errorHandler');

async function connetMongoDB() {
  try {
    await mongoose.connect(appConfig.MONGODB_URL);
    console.log('Database connection is successful!');
  } catch (error) {
    console.log('Failed to connet the database');
  }
}

function initServer() {
  const app = express();

  app.listen(appConfig.PORT);

  connetMongoDB();

  // middlewares
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );

  // route middlewares
  app.get('/', (req, res) => {
    res.send('Server is alive');
  });

  app.use('/api/products', productRouter);

  app.use(errorHandler);
}

initServer();
