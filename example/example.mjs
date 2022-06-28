import {ioredisClusterPort} from 'ioredis-cluster-port'
import {io_cc} from './rCluster.mjs'

var io_CP = new ioredisClusterPort(io_cc)

console.log(await io_CP.getPort({key: '{path}: path'}))
console.log(await io_CP.getPort({key: '{path}: path', ip: true}))


console.log(await io_CP.mapping({}))
console.log(await io_CP.mapping({ip: true}))