// server.js
const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.listen({ port: 3000 }, function (err) {
  if (err) throw err
  fastify.log.info(`server listening on ${fastify.server.address().port}`)
})
