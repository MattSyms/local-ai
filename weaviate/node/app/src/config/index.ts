import { getConfig } from 'apeframework/config/getConfig'
import { parseString } from 'apeframework/parser/parseString'
import { env } from 'env'

const config = getConfig({
  properties: {
    foo: {
      parser: parseString,
    },
  },
  env,
})

export {
  config,
}
