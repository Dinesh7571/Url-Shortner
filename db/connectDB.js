import mongoose from "mongoose";
export default async function connectToMongoDB(url){
    return mongoose.connect(url);
}