import mongoose from "mongoose";
import { Sensor } from "@/database/userSchema";
import { NextResponse } from "next/server";
import bcryprjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
const connectionStr = "mongodb+srv://lalilswani:KrGXqcaDbahGMmaL@cluster0.ygf21f6.mongodb.net/loginDatabase?retryWrites=true&w=majority&appName=Cluster0";


export const GET = async () => {
    const response = NextResponse.json({ position: 'HTTPS API Hit successfully', inputdata: "Welcome ElectroSoft", status: 202 })
    return response;
}

export const POST = async (reqest) => {
    let payload = await reqest.json();
    console.log(payload)
    await mongoose.connect(connectionStr)
   const filter = {_id:payload._id}
    let data ={sensor:payload.sensor,sw:payload.sw, btn:payload.btn, msg:payload.msg }
     await Sensor.findOneAndUpdate(filter,data)
     const result =  await Sensor.findOne(filter);
    const response = NextResponse.json({ position: result,  status: 202 })
    return response;

}

