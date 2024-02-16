import express from "express";
import cors from "cors";
import './db/connectDB.js';
import URL from "./modals/url.js";
import urlRouter from './routes/url.js';
import dotenv  from "dotenv"
import connectToMongoDB from "./db/connectDB.js";
const app=express();
dotenv.config()
const PORT=process.env.PORT
app.use(cors());
app.use(express.json());
connectToMongoDB(process.env.DATABASE)
  .then(()=> console.log("connected to db.."))
  .catch((err)=>console.log(`connection error:${err}`))
app.use("/url",urlRouter);

app.get("/:shortId",async(req,res)=>{
const shortID=req.params.shortId;
   const entry= await URL.findOne({
        shortID,
    })
   // res.send(entry);
    res.redirect(entry.redirectURL)
  });

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT :${PORT}`)
});