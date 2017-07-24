import express from 'express';
import bodyParser from 'body-parser';
import loggerMiddleware from './middlewares/logger';
import staticMiddleware from './middlewares/static';

import messageController from './controllers/message';
import indexController from './controllers/index';

const server = express();

/* Middlewares */
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const webpackMiddlewares = require('./middlewares/webpack').default;

  server.use(...webpackMiddlewares);
}

// server.use(loggerMiddleware);
server.use(staticMiddleware);
server.use(bodyParser.urlencoded({extended: true}));

/* Controllers */
server.use('/message', messageController);
server.use('/', indexController);

export default server;
