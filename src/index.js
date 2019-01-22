import { version } from '../package.json'
import * as type from './type'
import * as number from './number'
import * as fn from './function'
import * as date from './date'
import * as array from './array'
import * as object from './object'
import * as string from './string'

const usually = {
  version,
  ...type,
  ...number,
  ...fn,
  ...date,
  ...array,
  ...object,
  ...string
}

export default usually
