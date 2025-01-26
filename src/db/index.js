import {connect, model, Schema} from "mongoose"
export const connectDb= async ()=>{
    try{
        await connect(process.env.DB_URI )
            console.log("database connected successfully")
            const kittySchema=new Schema({
                name:String
            })
        const kitten=model("kitten",kittySchema)
    }catch(error){
        console.log(error)
    }
}

