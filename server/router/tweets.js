import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

// GET /tweets   &&   GET /tweets?username=:username
// 결과 값이 아닌 함수만 연결할 때는 ()를 빼줘야 한다.
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet)

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);



export default router;