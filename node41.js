//postman installation
//node js =>ctl+c next node index.js changed show browser
//or
//alternative:-
//npm start dev===>instalation 
//find:it shows only the 1st match..no carry about how many matches are there
//filter:it shows all the matches result
import flimRouter from './routes/movie.route.js'
import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import { MongoClient } from "mongodb";
//get all the movie api  //http://localhost:4000
// const express=require("express");

const app = express();
   
const PORT = process.env.PORT;
const hai="hai"
app.use(express.json());


// app.get("/flim", async function (request, response) {
//     const datas= await client
//     .db("node").collection("flims").find({}).toArray();
//     response.send(datas);
// });


//  const MONGO_URL = "mongodb://127.0.0.1";//mongodb+node.js =>connect
const MONGO_URL =process.env.MONGO_URL
    const client=new MongoClient(MONGO_URL);//mongodb+node.js =>connect

await client.connect();//mongodb+node.js =>connect
console.log("Mongo is connected");
app.use('/flim',flimRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


export {client};