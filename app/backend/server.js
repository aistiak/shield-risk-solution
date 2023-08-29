import express from 'express' ;
const PORT = 80 ;
const app = express() ;


app.get('/',(req,res)=>{
    const rand = parseInt(Math.random() * 10000) ;
    return res.status(200).json({rand});
})

app.listen(PORT,()=>{
    console.log(` -- server started on port ${PORT} ---`)
})