import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from "../webpack.config.dev"

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
  // res.send('Hello wold !!!');
  res.sendFile(path.join(__dirname, './index.html'))
});

app.listen('5000', () => console.log('Running on localhost:5000'));
