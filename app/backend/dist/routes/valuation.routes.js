"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const dayjs_1 = __importDefault(require("dayjs"));
const express_1 = require("express");
const valiations_1 = __importDefault(require("../valiations"));
const ValuationRoutes = (0, express_1.Router)();
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
ValuationRoutes.post(`${base}/calculate`, valiations_1.default.valuationRequestValidator, function (req, res, next) {
    var _a;
    try {
        const body = req.body;
        const { state_avg_cost_per_sqft, // F1 
        year_built, iso_type, building_type, construction_quality, roof_type, soil_type, built_out_factor, total_area, // F10
         } = body;
        const cost_modifier = (0, lodash_1.sum)([
            iso_type,
            building_type,
            construction_quality,
            roof_type,
            soil_type,
            built_out_factor
        ]);
        const replacement_cost_value = (state_avg_cost_per_sqft * total_area) * cost_modifier;
        const current_age = (_a = (0, dayjs_1.default)().diff((0, dayjs_1.default)().year(year_built), 'years')) !== null && _a !== void 0 ? _a : 0;
        const depreciation = (replacement_cost_value * current_age) / 100;
        const actual_cash_value = replacement_cost_value * (100 - depreciation);
        return res.status(200).json({
            cost_modifier,
            replacement_cost_value,
            actual_cash_value,
            depreciation,
            current_age,
        });
    }
    catch (e) {
        next(e);
    }
});
exports.default = ValuationRoutes;
//# sourceMappingURL=valuation.routes.js.map