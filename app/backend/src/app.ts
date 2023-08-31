import express from 'express';
import bodyParser from 'body-parser';


function GetAppServer(PORT,routes) {

    const app = express();

    app.use(bodyParser()) ;
    app.use(routes) ;

    app.all('/', (req, res) => {
        //@ts-ignore
        const rand = parseInt(Math.random() * 10000);
        return res.status(200).json({ rand });
    })  

    app.use((error , req,res,next)=>{
        try {
            const status: number = error.status || 500;
            const message: string = error.message || 'Something went wrong';
            res.status(status).json({ message });
        } catch (error) {
            next(error);
        }
    })

    return {

        listen() {
            app.listen(PORT, () => {
                console.log(` -- server started on port ${PORT} ---`)
            })
        }
    }
}

export default GetAppServer ;