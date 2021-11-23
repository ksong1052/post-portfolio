/*
  package.json에서 "type":"module",을 추가하면 import를 사용할 수 있다.
*/

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';

// Getting Router
import tweetsRouter from './router/tweets.js';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);

// 처리할 수 없는 요청이 왔을 때 처리
app.use((req, res, next) => {
  res.sendStatus(404);
});

// Error발생 시
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});

