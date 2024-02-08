import { build } from '/server'
import { open, access, mkdir } from 'node:fs/promises'
import { join } from 'path'
import { Time } from '/tools/date'
import { getPort } from '/tools/server'

const dir = 'test-results'
const port = getPort()

;(async () => {
  const app = await build({})
  app.listen({ port }, async (err) => {
    if (err) throw err
    const proc = Bun.spawn(['bun', 'e2e:cli'])
    const res = new Response(proc.stdout)

    await Promise.all([
      new Promise((resolve) =>
        proc.exited.then(async () => {
          await app.close()
          resolve(null)
        }),
      ),
      new Promise(async (resolve) =>
        res
          .text()
          .then(async (text) =>
            Promise.all([
              new Promise((resolve) =>
                Bun.write(Bun.stdout, text).then(resolve),
              ),
              new Promise(async (resolve) => {
                try {
                  await access(dir)
                }
                catch(ex) {
                  await mkdir(dir)
                }

                const time = new Time()

                const handle = await open(join(dir, time.longDash), 'wx')
                const foo = Bun.file(handle.fd)

                await Bun.write(foo, text)

                await handle.close()
                resolve(null)
              }),
            ]),
          )
          .then(resolve),
      ),
    ])
  })
})()
