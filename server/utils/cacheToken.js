const redis = require("../config/redis")


async function cacheToken(token) {
  await redis.set('safaricom_token', token, 'EX', 3600); // 3600 seconds = 1 hour
  console.log('Token cached!');
}
module.exports = cacheToken;