import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { carsRouter } from './routes/carsRouter.js';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3jpsn.mongodb.net/jubsDB?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.log('MongoDB connection failure: ' + err);
  }
})();

const app = express();

app.use(cors());

app.use(express.json());

app.use(carsRouter);

export { app };
