// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
import authroutes from './routes/authrouter.js';
import messageRouter from './routes/messageRouter.js';
import userRouter from './routes/userRouter.js';

import cookieParser from 'cookie-parser';

dotenv.config(); // this is used to run on server defined in .env


const app = express();
app.use(express.json()); //to get data from req.body in controllers
app.use(cookieParser());

const PORT = process.env.PORT || 3001;

app.get('/', (req,res) => {
    console.log('hello');
    console.log('welcome to backend  ankit');
    res.send('hello@!!');
    // res.send('hie');
})

app.use('/api/auth',authroutes);
app.use('/api/message',messageRouter)
app.use('/api/user',userRouter)

const connectToMongoDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017',{
            dbName: 'chat_app'
        });
        
        console.log('DB connection successfull');
    }
    catch(error){
        console.log('error in connecting to DB',error.message);
    }
};


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToMongoDB();
});