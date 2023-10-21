const fastify = require('fastify')({ logger: true });
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // DB 연결 성공 후에 Fastify 서버 시작
    fastify.register(require('@fastify/static'), {
      root: path.join(__dirname),
      prefix: '/', // optional: default '/'
    });

    fastify.get('/', async (request, reply) => {
      return reply.sendFile('front/login.html');
    });

    fastify.listen({ port: 3000 }, (err) => {
      if (err) throw err;
      console.log('Server is running on port 3000!');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
