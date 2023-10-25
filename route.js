async function routes(fastify, options) {

    fastify.get('/login', async (request, reply) => {
      return reply.sendFile("login.html"); // specify the file name here
    })

    // fastify.get('/register')
  }
  
  module.exports = routes  