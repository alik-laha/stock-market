import dotenv from 'dotenv'
import app from "./App"

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`server is runing on port ${process.env.PORT}`)
})