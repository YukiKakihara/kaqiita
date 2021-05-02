require('dotenv').config();

module.exports = {
  env: {
    MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY,
    MICRO_CMS_HOST: process.env.MICRO_CMS_HOST,
  }
};
