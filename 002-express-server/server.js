const express = require('express');

const port = 5000;

const server = express();

server.listen(port, () => {
  console.log(`Example app listening on port ${port}....`);
});

// end points

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Test Data');
});

router.get('/name', (req, res) => {
  res.send('simple express server');
});

router.get('/person', (req, res) => {
  res.status(200).json({
    name: 'Adam Wils',
    age: 50,
    address: {
      country: 'USA',
      state: 'Texas',
    },
  });
});

server.use('/api', router);
