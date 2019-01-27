const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');
const localization = require('../common/utils/localization');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.get('/api/v1/data', (req, res) => {
      return res.json({ 
        status: 'Success',
        data: new Date().toISOString()
      });
  });

  server.get('/data/:id', (req, res) => {
    return app.render(req, res, '/data', { id: req.params.id })
  });

  nextI18NextMiddleware(localization, app, server);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
        throw err;
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})