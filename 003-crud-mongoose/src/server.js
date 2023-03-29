const express = require('express');
const mongoose = require('mongoose');

const appConfig = require('./config/config');

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
}

initServer();
