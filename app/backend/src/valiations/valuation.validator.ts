import Joi from 'joi';
import JoiValidator from '../utils/JoiValidator';

const valudationSchema = Joi.object().keys({
    state_avg_cost_per_sqft: Joi.number().required(),
    year_built: Joi.number().required(),
    iso_type: Joi.number().required(),
    building_type: Joi.number().required(),
    construction_quality: Joi.number().required(),
    roof_type: Joi.number().required(),
    soil_type: Joi.number().required(),
    built_out_factor: Joi.number().required(),
    // cost_modifier : any ;
    total_area: Joi.number().required(),
});


const ValuationRequestValidator = JoiValidator(valudationSchema) ;

export default ValuationRequestValidator ;