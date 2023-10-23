async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })

    fastify.get('/login', async (request, reply) => {
      return reply.sendFile("login.html"); // specify the file name here
    })

    // fastify.get('/register')
  }
  
  module.exports = routes  