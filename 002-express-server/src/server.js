const express = require('express');
const { configureRoutes } = require('./router');

const port = 5000;

const server = express();

server.listen(port, () => {
  console.log(`Example app listening on port ${port}....`);
});

configureRoutes(server);
