import { NextResponse } from "next/server";
import connect from "@/db"
import ExchangeModel from "@/models/CryptoData"

export const GET = async ()=>{
   
    try{
        await connect()
        const exchangeData = await ExchangeModel.find();
     
        return new NextResponse(JSON.stringify(exchangeData) , {status:200});
    }catch(error){
        return new NextResponse("Error in Fetching Data" + error, {status:500});
    }
}