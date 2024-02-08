import S from 'fluent-json-schema'
import type { FastifyInstance, FastifyServerOptions } from 'fastify'
import { getVersion } from '/tools/version'

export default async function status(
  fastify: FastifyInstance,
  opts: FastifyServerOptions,
) {
  // There are two ways of declaring routes in Fastify,
  // the "full" declaration and the "shorthand" declaration.
  // The "shorthand" declaration is very similar to Express.
  // Both can do the same things, there are no differences.
  // I prefer the "full" declaration as I like to be explicit.
  // See https://www.fastify.io/docs/latest/Routes/.
  fastify.get(
    '/',
    {
      schema: {
        // The description field will be used by the swagger
        // generator to describe the route.
        description: 'Returns status and version of the application',
        response: {
          // You can define different schemas
          // based on the response status code.
          // Be aware that if you are using a response
          // schema and you don't define property, this property
          // will not be serialized in the final response, even if you
          // are returing it in your route handler.
          200: S.object()
            .prop('status', S.string())
            .prop('version', S.string()),
        },
      },
    },
    (req, res) => {
      return { status: 'ok', version: getVersion() }
    },
  )
}
