require('dotenv').config();

module.exports = {
  env: {
    ENV: process.env.ENV,
    MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY,
    MICRO_CMS_HOST: process.env.MICRO_CMS_HOST,
  }
};
