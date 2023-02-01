import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

import connectDB from './db/connect.js';

import authRouter from './routes/authRoutes.js'
import worksRouter from './routes/worksRoutes.js'
import contributionRouter from './routes/contributionRoutes.js'

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/works', worksRouter);
app.use('/api/v1/contibutions', contributionRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();