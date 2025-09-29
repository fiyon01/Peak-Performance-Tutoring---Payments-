const redis = require("../config/redis");


const getToken = async()=>{
    const CACHED_TOKEN = await redis.get("safaricom_token")

    if(CACHED_TOKEN){
        console.log("Using cached token",CACHED_TOKEN)
        return CACHED_TOKEN
    }else{
        console.log("NO cached token")
    }

}


module.exports = getToken;