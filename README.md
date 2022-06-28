# ioredis-cluster-port

Expects a configred ioredis cluster object

import {io_cc} from './ioredisClusterObject.mjs' // fully configure ioredis cluster object (see example)
import {ioredisClusterPort} from 'ioredis-cluster-port'

var io_CP = new ioredisClusterPort(io_cc)

console.log(await io_CP.getPort('{path}:path'))
//prints 7001 Number()

console.log(await io_CP.getPort('keyString')) // works with stick key hashes too (e.g., "{path}:keyname")


console.log(await io_cp.mapping())
// prints hash slot mapping values and the first value is the corresponding port
{
  '7001': { low: 0, high: 654 },
  '7002': { low: 655, high: 1310 },
  '7003': { low: 1311, high: 1965 },
  '7004': { low: 1966, high: 2620 },
  '7005': { low: 2621, high: 3276 },
  '7006': { low: 3277, high: 3931 },
  '7007': { low: 3932, high: 4587 },
  '7008': { low: 4588, high: 5242 },
  '7009': { low: 5243, high: 5897 },
  '7010': { low: 5898, high: 6553 },
  '7011': { low: 6554, high: 7208 },
  '7012': { low: 7209, high: 7863 },
  '7013': { low: 7864, high: 8519 },
  '7014': { low: 8520, high: 9174 },
  '7015': { low: 9175, high: 9829 },
  '7016': { low: 9830, high: 10485 },
  '7017': { low: 10486, high: 11140 },
  '7018': { low: 11141, high: 11795 },
  '7019': { low: 11796, high: 12451 },
  '7020': { low: 12452, high: 13106 },
  '7021': { low: 13107, high: 13762 },
  '7022': { low: 13763, high: 14417 },
  '7023': { low: 14418, high: 15072 },
  '7024': { low: 15073, high: 15728 },
  '7025': { low: 15729, high: 16383 }
}


console.log(await io_cp.mapping({ip: true}))

{
  '127.0.0.1:7001': { low: 0, high: 654 },
  '127.0.0.1:7002': { low: 655, high: 1310 },
  '127.0.0.1:7003': { low: 1311, high: 1965 },
  '127.0.0.1:7004': { low: 1966, high: 2620 },
  '127.0.0.1:7005': { low: 2621, high: 3276 },
  '127.0.0.1:7006': { low: 3277, high: 3931 },
  '127.0.0.1:7007': { low: 3932, high: 4587 },
  '127.0.0.1:7008': { low: 4588, high: 5242 },
  '127.0.0.1:7009': { low: 5243, high: 5897 },
  '127.0.0.1:7010': { low: 5898, high: 6553 },
  '127.0.0.1:7011': { low: 6554, high: 7208 },
  '127.0.0.1:7012': { low: 7209, high: 7863 },
  '127.0.0.1:7013': { low: 7864, high: 8519 },
  '127.0.0.1:7014': { low: 8520, high: 9174 },
  '127.0.0.1:7015': { low: 9175, high: 9829 },
  '127.0.0.1:7016': { low: 9830, high: 10485 },
  '127.0.0.1:7017': { low: 10486, high: 11140 },
  '127.0.0.1:7018': { low: 11141, high: 11795 },
  '127.0.0.1:7019': { low: 11796, high: 12451 },
  '127.0.0.1:7020': { low: 12452, high: 13106 },
  '127.0.0.1:7021': { low: 13107, high: 13762 },
  '127.0.0.1:7022': { low: 13763, high: 14417 },
  '127.0.0.1:7023': { low: 14418, high: 15072 },
  '127.0.0.1:7024': { low: 15073, high: 15728 },
  '127.0.0.1:7025': { low: 15729, high: 16383 }
}
^C