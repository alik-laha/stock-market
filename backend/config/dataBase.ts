import mongoose from "mongoose"

export const cunectdb = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI!)

       const connection =mongoose.connection

        connection.on("connected",()=>{

            console.log(`connection established with ${process.env.MONGO_URI}`)
        })

        connection.on("error",()=>{

            console.log(`error While connect with your db`)

            process.exit()
        })
    }catch(err){
        console.log(err)
    }
}
