import Server from './server';
import config from './config/configuration';
console.log('config is', config);
const server = new Server({PORT : 9000});

server.bootstrap().run();