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

    return {

        listen() {
            app.listen(PORT, () => {
                console.log(` -- server started on port ${PORT} ---`)
            })
        }
    }
}

export default GetAppServer ;