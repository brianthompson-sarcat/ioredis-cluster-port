import {io_cc} from './ioredisClusterObject.mjs'
import {ioredisClusterPort} from '../src/index.mjs'

var io_CP = new ioredisClusterPort(io_cc)

console.log(await io_CP.getPort('{path}:path'))


console.log(await io_CP.mapping({ip: true}))