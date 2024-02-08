import Swagger from '@fastify/swagger'
import SwaggerUI from '@fastify/swagger-ui'
import { getVersion } from '/tools/version'
import type { FastifyInstance, FastifyServerOptions } from 'fastify'

export default async function swagger(
  fastify: FastifyInstance,
  opts: FastifyServerOptions,
) {
  // Swagger documentation generator for Fastify.
  // It uses the schemas you declare in your routes to generate a swagger compliant doc.
  // https://github.com/fastify/fastify-swagger
  await fastify.register(Swagger, {
    swagger: {
      info: {
        title: 'Sample APP',
        description: 'Sample APP',
        version: getVersion(),
      },
      externalDocs: {
        url: 'https://github.com/delvedor/fastify-example',
        description: 'Find more info here',
      },
      host: process.env.HOST, // and your deployed url
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json', 'text/html'],
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Bearer',
          in: 'header',
        },
        Csrf: {
          type: 'apiKey',
          name: 'x-csrf-token',
          in: 'header',
        },
      },
    },
  })

  if (process.env.NODE_ENV !== 'production') {
    await fastify.register(SwaggerUI, {
      routePrefix: '/swagger',
    })
  }
}
