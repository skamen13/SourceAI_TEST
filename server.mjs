import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import React from 'react';
import express from 'express'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Your React App</title>
    </head>
    <body>
      <div id="root">${reactDom}</div>
    </body>
    </html>
    `
    );
});

const server = createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
