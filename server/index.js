import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';


import postRoutes from './routes/postRoutes.js';
import picRoutes from './routes/picRoutes.js';
import connectDB from "./mongodb/connect.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/pic', picRoutes);
app.get('/', async(req, res)=>{
    res.send('Hello from Pic Trigger');
})

const startServer = async () => {

    try{
      connectDB(process.env.MONGODB_URL);
    }catch (error) {
       console.log(error);
    }

    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
}

startServer();