import dotenv from 'dotenv'
import { dbConnection } from './config/dataBase'
import app from "./App"
dotenv.config()

dbConnection()

app.listen(process.env.PORT, () => {
    console.log(`server is runing on port ${process.env.PORT}`)
})