import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    return res.json('Hello, World!');
  } catch (exception) {
    console.error(exception.message);
    return res.status(500).json('Server Error!');
  }
});

export default router;
