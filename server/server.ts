import React from 'react';
import ReactServerDom from 'react-dom/server';
import express from 'express';
import fs from 'fs/promises';
import path from 'path'
import App from '../src/app';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', async (req, res) => {
  const indexFilePath = path.resolve(__dirname, 'public/index.html');

  try {
    const htmlTemplate = await fs.readFile(indexFilePath, 'utf-8');

    const reactApp = ReactServerDom.renderToString(React.createElement(App));

    const finalOutput = htmlTemplate.replace(
        '<div id = "app"></div>',
        `<div id = "app">${reactApp}</div>`);

    res.send(finalOutput);
  } catch (ex) {
    console.error(`error generating index html resp: ${ex}`);
    res.status(500).send('Oops, something went 2020');
  }
});

server.listen(port, () => {
    console.info(`listening on port ${port}`)
});
