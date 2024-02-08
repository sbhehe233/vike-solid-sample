import fastify from 'fastify'
import Mercurius from '/plugins/mercurius'
import Swagger from '/plugins/swagger'
import Status from '/routes/status'
import type { FastifyInstance, FastifyServerOptions } from 'fastify'

export const build = async (
  opts: FastifyServerOptions,
): Promise<FastifyInstance> => {
  const app = fastify()
  return Promise.all([Mercurius(app, opts), Swagger(app, opts)]).then(
    async () => {
      await Status(app, opts)
      return app
    },
  )
}
