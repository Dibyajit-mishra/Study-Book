const app = require('./src/app')
const dotenv = require('dotenv')
const connectDb = require('./config/db')

dotenv.config()
connectDb()

const PORT = process.env.PORT || 3000

app.get('/',(req,resp)=>{
    resp.send("hello")
})

app.listen(PORT,()=>{
    console.log(`Server running successfuly at:${PORT}`)
})