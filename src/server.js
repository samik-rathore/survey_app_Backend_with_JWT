import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import apiRouter from './routes/index.js';
import MongoUtils from './utils/MongoUtils.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to the sever");
});

app.use("/api" , apiRouter);

app.listen(PORT , async (err) => {
    if(err) console.error(err);
    console.log("Server is running on port 3000");
    await MongoUtils.connect();
    console.log("Connected to MongoDB");
});
