import express from 'express';

import auth from './auth';
import choices from './choices';
import options from './options';
import points from './points';
import questions from './questions';
import rooms from './rooms';

import response from '../utils/response';

const router = express.Router();

router.get<{}, {}>('/', (req, res) => {
  response.ok('Welcome to Emoji API', {
    message: 'API - 👋🌎🌍🌏',
  }, res);
});

router.use('/auth', auth);
router.use('/choices', choices);
router.use('/options', options);
router.use('/points', points);
router.use('/questions', questions);
router.use('/rooms', rooms);

export default router;
