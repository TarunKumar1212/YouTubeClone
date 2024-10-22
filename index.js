import express from 'express'

const app = express();
const port = 4000;


import './Connection/Conn.js';

app.get('/',(req,res)=>{
    res.send({
        message:"Backend is started"
    })
})

app.listen(port,()=>{console.log("running on 4000")})

