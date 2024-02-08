import type { FastifyInstance, FastifyServerOptions } from 'fastify'
import mercurius, {
  IFieldResolver,
  IResolvers,
  MercuriusContext,
} from 'mercurius'
import { context } from '/context/prisma'
import { schema } from '/schema/default'

export default async function (
  fastify: FastifyInstance,
  opts: FastifyServerOptions,
) {
  await fastify.register(mercurius, {
    schema,
    graphiql: true,
    context: () => context,
  })
}
