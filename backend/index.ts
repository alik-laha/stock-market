import dotenv from 'dotenv'
import {dbConnection} from './config/dataBase.js'
import app from "./App.js"
dotenv.config()

dbConnection()

app.listen(3000, () => {
    console.log(`server is runing on port 3000`)
})