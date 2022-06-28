import {crc16xmodem} from 'node-crc'

async function getSlotDict(obj){
    var {client, ip} = obj
    const slots = await client.cluster("SLOTS")
    const slotDict = {}
    var i = 0
    do {
        var slt_low = slots[i][0]
        var slt_high = slots[i][1]
        var port = slots[i][2][1]
        if(ip == true){
            var ip_add = slots[i][2][0]
            slotDict[`${ip_add}:${port}`] = {low: slt_low, high: slt_high}
        } else {
            slotDict[port] = {low: slt_low, high: slt_high}
        }
        i++
    } while(i < slots.length)
    return slotDict
}

async function keyHash2Port(keyHashNumber, obj){
    var {ip} = obj
    var finalPort
    var slotDict = await getSlotDict(obj)
    for(var ip_port in slotDict){
        if(slotDict[ip_port].low <= keyHashNumber){
            if(slotDict[ip_port].high >= keyHashNumber){
                if(ip){
                    finalPort = ip_port
                } else {
                    finalPort = Number(ip_port)
                }
               
            }
        }
    }
    return finalPort
}

async function redisIP_Port(obj){
    var {client, key, ip} = obj
    if(key){
        if(key.indexOf('{') > -1){
            var start=key.indexOf('{')+1
            var stop=key.indexOf('}') 
            key = key.slice(start, stop)
        }
        var buf = Buffer.from(key)
        return await keyHash2Port(parseInt(crc16xmodem(buf).toString('hex'), 16) % 16384,obj)
    } else {
        return keyHash2Port()
    }
}

export class ioredisClusterPort {
    constructor(ioredis_cc){
        this.clusterClient = ioredis_cc
        this.mapDict
    }
    mapping = async (obj) =>{
        obj.client = this.clusterClient
        this.mapDict = await getSlotDict(obj)
        return this.mapDict
    }
    getPort = async (obj) =>{
        obj.client = this.clusterClient
        return await redisIP_Port(obj)
    }
}

