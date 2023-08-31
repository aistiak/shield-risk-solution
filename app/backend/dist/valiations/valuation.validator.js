"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const JoiValidator_1 = __importDefault(require("../utils/JoiValidator"));
const valudationSchema = joi_1.default.object().keys({
    state_avg_cost_per_sqft: joi_1.default.number().required(),
    year_built: joi_1.default.number().required(),
    iso_type: joi_1.default.number().required(),
    building_type: joi_1.default.number().required(),
    construction_quality: joi_1.default.number().required(),
    roof_type: joi_1.default.number().required(),
    soil_type: joi_1.default.number().required(),
    built_out_factor: joi_1.default.number().required(),
    // cost_modifier : any ;
    total_area: joi_1.default.number().required(),
});
const ValuationRequestValidator = (0, JoiValidator_1.default)(valudationSchema);
exports.default = ValuationRequestValidator;
//# sourceMappingURL=valuation.validator.js.map