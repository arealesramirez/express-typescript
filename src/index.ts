import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { generateToken } from './api/utils/jwt.utils';
import * as path from 'path';
import routes from './api/routes';
import logger from './api/middlewares/logger.middleware';
import errorHandler from './api/middlewares/error-handler.middleware';

const app = express();
const port = 3000;

// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
  console.log('JWT', generateToken());
}

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request 
app.use(cors());

// add logger middleware
app.use(logger);

app.use('/api/', routes);

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});