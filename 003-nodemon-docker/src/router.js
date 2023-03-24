import { Router } from 'express';

const router = Router();

router.get('/test', (req, res) => {
  res.status(200).send('Test');
});

router.get('/hello', (req, res) => {
  res.status(200).send('Hello');
});

router.get('/hello-world', (req, res) => {
  res.status(200).send('Hello');
});

export { router };
