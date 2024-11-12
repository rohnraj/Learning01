const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const seedDummyData=require('./seed')
const routes=require('./apis/UserApis')
const cors=require('cors')
const app=express()

//connecting database
mongoose.connect(process.env.MONGODB_CONNECTION_KEY)
.then(()=>console.log('connected to the data base successfully'))
.catch((res)=>console.log(res))

//seeding dummy data
// seedDummyData()


//middleware for cross platform sharing
app.use(cors())
app.use(express.json())

//middleware for routes
app.use(routes)

const PORT=8080
app.listen(PORT, ()=>{
    console.log(`connected to port number:-${PORT}`);
})