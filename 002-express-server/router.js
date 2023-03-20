const { Router } = require('express');

const router = Router();

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

module.exports = router;
