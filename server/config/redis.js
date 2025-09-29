const Redis = require("ioredis");


const redis = new Redis({
    host:'redis-12203.c239.us-east-1-2.ec2.redns.redis-cloud.com',
    port:12203,
    username:"default",
    password:"5a40gwEKib990DzZkS59IfKc23cRoWSy"
})

redis.on("connect",()=>{
    console.log("Connected to Redis")
})

redis.on("error",(err)=>{
    console.error("Redis connection error",err)
});



module.exports = redis