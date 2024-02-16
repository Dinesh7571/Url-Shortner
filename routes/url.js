import express from 'express';
import  GenerateShortUrl  from '../controlers/url.js';

const urlRouter=express.Router();

urlRouter.post("/",GenerateShortUrl);

export default urlRouter;