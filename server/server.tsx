import React from 'react';
import ReactServerDom from 'react-dom/server';
import express from 'express';
import fs from 'fs/promises';
import path from 'path'
import App from '../src/app';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router';

const port = 3000;
const server = express();

const TITLE_PLACE_HOLDER = '<!--SSR-TITLE-TEMPLATE-->';

server.use('/public', express.static('dist/public'));

server.get('*', async (req, res) => {
  console.info('handling request for spa');

  const indexFilePath = path.resolve(__dirname, 'public/index.html');

  try {
    const htmlTemplate = await fs.readFile(indexFilePath, 'utf-8');

    const reactApp = buildReactApp(req);

    const helmetContents = Helmet.renderStatic();
    const title = helmetContents.title.toString();

    let finalOutput = htmlTemplate.replace(TITLE_PLACE_HOLDER, title);

    finalOutput = finalOutput.replace(
        '<div id = "app"></div>',
        `<div id = "app">${reactApp}</div>`);

    res.send(finalOutput);
  } catch (ex) {
    console.error(ex)
    res.status(500).send('Oops, something went 2020');
  }
});

server.listen(port, () => {
    console.info(`listening on port ${port}`)
});

function buildReactApp(req): string {
  const context = {};

  return ReactServerDom.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
  );
}
