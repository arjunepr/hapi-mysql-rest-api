const Hapi = require('hapi');

const server = new Hapi.Server();

server.register(require('hapi-auth-jwt'), err => {
  if(err) {console.error('We have a severe problem...'); return;}
  
  server.auth.strategy('token', 'jwt', {
    key: 'vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy',

    verifyOptions: {
      algorithms: ['HS256'],
    }

  });
});