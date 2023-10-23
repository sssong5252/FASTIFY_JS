const fastify = require('fastify')({ logger: true })
const routes = require('./route')
const otherRoutes = require('./other-routes')
const myPlugin = require('./my-plugin')
const fastifyMongoDB = require('@fastify/mongodb').default
const path = require('path');
const fastifyStatic = require('@fastify/static');
const front = path.join(__dirname, 'front');
require('dotenv').config(); // 환경 변수 로드

// MongoDB 연결 설정
fastify.register(fastifyMongoDB, {
  forceClose: true,
  url: process.env.MONGODB_URL, // 환경 변수에서 MongoDB URL 가져오기
})

// 플러그인 등록
fastify.register(myPlugin)


// register() 메서드 내부에서 미들웨어 등록
fastify.register((instance, options, done) => {
  instance.addHook('preHandler', (req, res, next) => {
    console.log('미들웨어 동작')
    next()
  })
  done()
})

// MongoDB 연결 상태 확인
fastify.addHook('onReady', async () => {
  try {
    const mongoStatus = await fastify.mongo.db.command({ ping: 1 });
    console.log('MongoDB ping:', mongoStatus);
  } catch (error) {
    console.error('MongoDB connection problem:', error);
  }
})

// 정적 파일 제공 설정
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'front'), // 'public' 폴더에 있는 파일들을 제공합니다.
  prefix: '/', // 접두사. 예: '/favicon.ico'로 요청이 오면 './public/favicon.ico'를 반환합니다.
});

// 라우트 등록
fastify.register(routes)
fastify.register(otherRoutes)

// 서버 시작하기 
fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
})