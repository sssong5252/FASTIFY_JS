// other-routes.js

async function otherRoutes(fastify, options) {
    fastify.get('/another-route', async (request, reply) => {
      return { message: 'This is another route' }
    })
  
    // 다른 경로와 핸들러 등록
    // fastify.get('/path', async (request, reply) => { ... })
  }
  
  module.exports = otherRoutes;
  