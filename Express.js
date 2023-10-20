const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // 여기에서 서버 시작 등 필요한 작업을 수행할 수 있습니다.
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });