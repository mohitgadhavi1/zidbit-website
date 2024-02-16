import { NextResponse } from "next/server";
import connect from "@/db"
import AssetModel from "@/models/AssetData"

export const GET = async ()=>{
   
    try{
        await connect()
        const assetData = await AssetModel.find();
     
        return new NextResponse(JSON.stringify(assetData) , {status:200});
    }catch(error){
        return new NextResponse("Error in Fetching Data" + error, {status:500});
    }
}