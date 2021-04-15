const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://distor.dev';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;


module.exports = {
  environment,
  isProd,
  base: {
    site: baseUrl
  },
  tracking: {
    gtag:'G-87HXTP0SFH'
  },
  ads: {
    capub: 'ca-pub-3141622054291429'
  }
}