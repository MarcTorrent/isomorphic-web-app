import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, RouterContext, match } from 'react-router';
import routes from './shared/routes';

const app = express();

const renderFullPage = (html) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>Isomorphic Redux Demo</title>
      </head>
      <body>
        <div id="react-view">${html}</div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <script type="application/javascript" src="bundle.js"></script>
      </body>
    </html>
  `;
};

// app.use('/dist/static', express.static('./dist/static'));

app.get('*', (req, res) => {

  const history = createMemoryHistory(req.path);

  match({ routes, history }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');

    const InitialComponent = (
      <RouterContext {...renderProps} />
    );
    const componentHTML = renderToString(InitialComponent);

    res.status(200).send(renderFullPage(componentHTML));
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

module.exports = app;
