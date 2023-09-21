import { Router } from 'express';
import ValuationRoutes from './valuation.routes';
import RiskRouter from './risk.routes';

const RootRoutes = Router();

RootRoutes.use('/', ValuationRoutes);
RootRoutes.use('/',RiskRouter) ;

export default RootRoutes;