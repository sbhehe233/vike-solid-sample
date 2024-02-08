import { build } from '/server'
import { getPort } from '/tools/server'

const port = getPort()
const opts = {}

const handleErr = (err: Error) => {
  console.error(err)
  process.exit(1)
}

;(async () =>
  (await build(opts)).listen({ port }, (err) => {
    if (err) handleErr(err)
    console.log(`\
    🚀 Server ready at: http://localhost:4000/graphiql
    ⭐️ See sample queries: http://pris.ly/e/ts/graphql-fastify-sdl-first#using-the-graphql-api
    `)
  }))()
