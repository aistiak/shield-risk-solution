import express from 'express' ;
const PORT = 80 ;
const app = express() ;


app.get('/',(req,res)=>{
    return res.sendStatus(200);
})

app.listen(PORT,()=>{
    console.log(` -- server started on port ${PORT} ---`)
})