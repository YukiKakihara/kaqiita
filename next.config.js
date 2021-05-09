require('dotenv').config();

module.exports = {
  env: {
    APP_HOST: process.env.APP_HOST,
    ENV: process.env.ENV,
    MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY,
    MICRO_CMS_HOST: process.env.MICRO_CMS_HOST,
  }
};
