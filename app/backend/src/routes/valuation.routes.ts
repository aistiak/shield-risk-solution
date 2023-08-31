
import {Router} from 'express' ;

const ValuationRoutes = Router() ;

const base = '/valuation';

ValuationRoutes.get(`${base}`,(req,res,next)=> {

    return res.sendStatus(200) ;
});

export default ValuationRoutes ;