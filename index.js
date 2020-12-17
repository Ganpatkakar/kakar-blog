import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import mongoose from "mongoose";
import PostsRouter from "./routes/posts-route.js";
import cors from 'cors';

const env = dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', PostsRouter);
app.use('/', (req, res) => {
	res.send("Home router");
});


const PORT = process.env.PORT;

mongoose.connect(process.env.MONGOCONNECT, { useNewUrlParser: true })
	.then((db) => {
		console.log(`Connected with db`);
	})
	.catch(err => console.log(err));

app.listen(PORT, () => {
	console.log(`Logging from PORT:${PORT}`);
});

mongoose.set('useFindAndModify', false);