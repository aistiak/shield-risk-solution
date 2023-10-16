import { Router } from 'express';
import ValuationRoutes from './valuation.routes';
import RiskRouter from './risk.routes';
import ReportRouter from './report.routes';

const RootRoutes = Router();

RootRoutes.use('/', ValuationRoutes);
RootRoutes.use('/',RiskRouter) ;
RootRoutes.use('/',ReportRouter);

export default RootRoutes;