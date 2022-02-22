/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {//by default env support
        mongo_usrname: "dsadada"
      }
    }
  }
  return{
    env:{
      mongo_usrname:"fdfsdsdfsdfgdffgffdgdgfgfdgfdgfdgfdgfdgfd"
    }
  }
}
