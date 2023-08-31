import { Router } from 'express';
import ValuationRoutes from './valuation.routes';

const RootRoutes = Router();

RootRoutes.use('/', ValuationRoutes);

export default RootRoutes;