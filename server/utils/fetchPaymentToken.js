const getToken = require("./getToken");
const cacheToken = require("./cacheToken");
const axios = require("axios");

const auth = Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64');

const fetchPaymentToken = async () => {
  // Check Redis cache first
  const cachedToken = await getToken();
  if (cachedToken) {
    return cachedToken;
  }

  // Fetch from Safaricom API
  const response = await axios.get(process.env.SAF_AUTH_API, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  const access_token = response.data.access_token;

  // Cache token in Redis
  await cacheToken(access_token);

  return access_token;
};

module.exports = fetchPaymentToken;
