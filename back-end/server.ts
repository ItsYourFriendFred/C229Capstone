#!/usr/bin/env node

/*! 
Server: Initialization of middleware, setting up routes
*/

/**
 * Module dependencies.
 */

/* Configure server to load environment variables from a .env file*/
import * as dotenv from 'dotenv';
dotenv.config();

import app from './server/config/app';
//const debug = require('debug')('back-end:server');
import debug from 'debug';
debug('back-end:server');
import http from 'http';
import { HttpError } from 'http-errors';
import { AddressInfo } from 'net';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3500');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: HttpError) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address() as string | AddressInfo;
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  /*  
  let addr = server.address() as string;
  let bind = 'pipe ' + addr;
  */
  debug('Listening on ' + bind);
}
