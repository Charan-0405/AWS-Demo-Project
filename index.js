const express= require('express')
const app= express()
const ip= require('ip')
app.get("/ping",(req,res)=>{
    return res.json({
        message:"Welcome Charan",
        server_address:ip.address()
})
})
app.listen(3000,()=>{
    console.log('server running on port 3000')
})
