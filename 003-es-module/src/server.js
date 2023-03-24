import express from 'express';
import { router } from './router.js';

const port = 5000;

const server = express();

server.listen(port, () => {
  console.log(`Example app listening on port ${port}....`);
});

server.use('', router);
