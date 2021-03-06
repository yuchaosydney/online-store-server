module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'PHONE CASE STORE API',
      script    : './dist/main.js',
      env: {
        NODE_ENV: 'development',
        PORT: 9000,
        MONGODB_CONNECTION: 'mongodb://localhost/phonecasestore',
        MONGODB_DB_USERNAME: 'admin',
        MONGODB_DB_PWD: '123',
        TOKEN_SECRET: 'ilovescotchyscotch',
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 8080,
        MONGODB_CONNECTION: 'mongodb://admin:123@13.236.73.43/phonecasestore?authSource=admin',
        MONGODB_DB_USERNAME: 'admin',
        MONGODB_DB_PWD: '123',
        TOKEN_SECRET: 'ilovescotchyscotch',
      }
    }
  ]

};
