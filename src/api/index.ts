import express from 'express';

import auth from './auth';
import rooms from './rooms';
import questions from './questions';

import response from '../utils/response';

const router = express.Router();

router.get<{}, {}>('/', (req, res) => {
  response.ok('Welcome to Emoji API', {
    message: 'API - 👋🌎🌍🌏',
  }, res);
});

router.use('/auth', auth);
router.use('/rooms', rooms);
router.use('/questions', questions);

export default router;
