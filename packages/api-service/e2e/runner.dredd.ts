import { build } from '/server'
import { open, access, mkdir } from 'node:fs/promises'
import { join } from 'path'
import { Time } from '/tools/date'
import { getPort } from '/tools/server'

import Dredd from 'dredd'

const dredd = new Dredd({
  endpoint: 'http://localhost:4000/',
  path: ['./api-description.apib'],
  loglevel: 'warning',
  reporter: ['cli'],
  output: [],
  color: true,
})
const dir = 'test-results'
const port = getPort()

;(async () => {
  const app = await build({})
  app.listen({ port }, async (err) => {
    if (err) throw err
    dredd.run(function (err, stats) {
      if (err) throw err
      app.close()
    })
  })
})()