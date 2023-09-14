import { sum } from 'lodash';
import dayjs from 'dayjs';

import { Router } from 'express';
import Validator from '../valiations';

const ValuationRoutes = Router();

const base = '/valuation';

ValuationRoutes.get(`${base}`, (req, res, next) => {

    return res.sendStatus(200);
});

/**
 * @swagger
 * /valuation/calculate:
 *     post:
 *         description: calculate valuation
 *         requestBody:
 *             required: true 
 *             content:
 *                 application/json:
 *                    schema:
 *                        type : object
 *                        properties:
 *                            state_avg_cost_per_sqft:
 *                                type : number 
 *                                required: true 
 *                            year_built:
 *                                type : number 
 *                                required: true 
 *                            iso_type:
 *                                type : number 
 *                                required: true 
 *                            building_type:
 *                                type : number 
 *                                required: true 
 *                            construction_quality:
 *                                type : number 
 *                                required: true 
 *                            roof_type:
 *                                type : number 
 *                                required: true 
 *                            soil_type:
 *                                type : number 
 *                                required: true 
 *                            built_out_factor:
 *                                type : number 
 *                                required: true 
 *                            total_area:
 *                                type : number 
 *                                required: true 
 *     responses:
 *         200:
 *             description : valuation object
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             name: string
 *                             required : true 
 *     
*/
ValuationRoutes.post(
    `${base}/calculate`,
    Validator.valuationRequestValidator,
    function (req, res, next) {
        try {
            type ReqBody = {
                state_avg_cost_per_sqft: number;
                year_built: any;
                iso_type: number;
                building_type: number;
                construction_quality: number;
                roof_type: number;
                soil_type: number;
                built_out_factor: number;
                // cost_modifier : any ;
                total_area: number;
            };

            const body = req.body as ReqBody;

            const {
                state_avg_cost_per_sqft, // F1 
                year_built,
                iso_type,
                building_type,
                construction_quality,
                roof_type,
                soil_type,
                built_out_factor,
                total_area, // F10
            } = body;

            let cost_modifier = sum([ // F9
                iso_type,
                building_type,
                construction_quality,
                roof_type,
                soil_type,
                built_out_factor
            ]);
            console.log({cost_modifier})
            cost_modifier += 100

            let replacement_cost_value = (state_avg_cost_per_sqft * total_area) * ( (cost_modifier  )/ 100 );
            replacement_cost_value = Number(Math.round(replacement_cost_value))
            // const current_age = dayjs().diff(dayjs().year(year_built), 'years')   ?? 0;
            const current_age = (new Date()).getFullYear() - year_built ;
            let depreciation = (replacement_cost_value * current_age) / 100 ;
            depreciation = Number(Math.round(depreciation))
            let actual_cash_value = replacement_cost_value * (100 - current_age) / 100;
            actual_cash_value = Number(Math.floor(actual_cash_value))
            return res.status(200).json({
                cost_per_sqf : Number((cost_modifier * state_avg_cost_per_sqft  / 100 ).toFixed(2)),
                replacement_cost_value,
                actual_cash_value,
                depreciation,
                current_age,
            });
        } catch (e) {
            next(e)
        }
    }
);

export default ValuationRoutes;