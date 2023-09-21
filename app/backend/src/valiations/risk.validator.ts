import JoiValidator from "../utils/JoiValidator";

const Joi = require('joi');

const riskSchema = Joi.object({
    year_built: Joi.number().default(0),
    construction_type: Joi.number().default(0),
    building_type: Joi.number().default(0),
    build_quality: Joi.number().default(0),
    number_of_stories: Joi.number().default(0),
    area: Joi.number().default(0),
    roof_type: Joi.number().default(0),
    functional: Joi.number().default(0), // Note: Corrected the typo in 'funationa'
    burglar_alarm: Joi.number().default(0),
    burglar_alarm_connected_to_central_station: Joi.number().default(0),
    fire_alarm: Joi.number().default(0),
    fire_alarm_connected_to_central_station: Joi.number().default(0),
    sprinklers: Joi.number().default(0),
    percentage_of_building_sprinklered: Joi.number().default(0),
    nearest_fire_station: Joi.number().default(0),
    fire_hydrant_within_1000_ft: Joi.number().default(0),
    volunteer_department: Joi.number().default(0),
    mobile_tanks: Joi.number().default(0),
    violent_crime_score: Joi.number().default(0),
    stock: Joi.number().default(0),
    cord_and_wires: Joi.number().default(0),
    heavy_furniture: Joi.number().default(0),
    vehicle_storage: Joi.number().default(0),
    tools_and_equipment: Joi.number().default(0),
    wood_cloth_paper_plastic: Joi.number().default(0),
    oil_and_other_flammables: Joi.number().default(0),
    cooking: Joi.number().default(0),
    ansul_type_suppression_system: Joi.number().default(0),
    restaurent_bar_or_club: Joi.number().default(0), // Note: Corrected the typo in 'clud'
    manufacturing: Joi.number().default(0),
    mechanical_repair: Joi.number().default(0), // Note: Corrected the typo in 'mechanical_reapir'
    welding_and_fabrication: Joi.number().default(0),
    work_with_chemicals_or_oils: Joi.number().default(0),
    fire_extinguishers: Joi.number().default(0),
    extinguisher_inspected_and_tagged_in_last_3_years: Joi.number().default(0),
    wind_states: Joi.number().default(0),
    coastal: Joi.number().default(0),
    distance_to_coast: Joi.number().default(0),
    flood_zone: Joi.number().default(0),
    experienced_prior_flood: Joi.number().default(0),
    wildfire_probability: Joi.number().default(0),
    brush_area: Joi.number().default(0),
    quake_hazard: Joi.number().default(0),
    prior_losses_in_last_5_years: Joi.number().default(0),
});


const RiskRequestValidator = JoiValidator(riskSchema) ;

export default RiskRequestValidator ;

