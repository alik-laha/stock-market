import dotenv from 'dotenv'

dotenv.config()

import app from "./App.js"


app.listen(3000, () => {
    console.log(`server is runing on port 3000`)
})