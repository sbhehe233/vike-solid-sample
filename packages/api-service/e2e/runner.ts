import { build } from '/server'
import { access, mkdir, writeFile } from 'fs/promises'
import { runFromFile } from '@stepci/runner'
import { join } from 'path'
import { Time } from '/tools/date'
import { getPort } from '/tools/server'
import prettier from 'prettier'

const dir = join(__dirname, '../test-results')
const port = getPort()

;(async () => {
  const app = await build({})
  app.listen({ port }, async (err) => {
    if (err) throw err
    let output = ''
    await Promise.all([
      new Promise((resolve) =>
        runFromFile(join(__dirname, './workflow.yml'))
          .then(
            async (result) =>
              (output = await prettier.format(JSON.stringify(result), {
                parser: 'json',
              })),
          )
          .finally(() => resolve(null)),
      ),
      new Promise(async (resolve) => {
        try {
          await access(dir)
        } catch (ex) {
          await mkdir(dir)
        }

        resolve(null)
      }),
    ])
    const time = new Time()
    await Promise.all([
      app.close(),
      writeFile(join(dir, time.longDash), output),
    ]).finally(() => console.log(output))
  })
})()
