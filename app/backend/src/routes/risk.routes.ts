import { Router } from 'express';
import Validator from '../valiations';
import RiskRequestValidator from '../valiations/risk.validator';
const _ = require('lodash');
const RiskRouter = Router();

const base = '/risk';


// RiskRouter.get(`${base}/`, (req, res) => {

//     return res.sendStatus(200);
// });

RiskRouter.post(`${base}/calculate`, RiskRequestValidator, async (req, res) => {

    type ReqBody = {
        year_built: number;
        construction_type: number;
        building_type: number;
        build_quality: number;
        number_of_stories: number;
        area: number;
        roof_type: number;
        funationa: number;
        burgler_alarm: number;
        burgler_alarm_connected_to_central_station: number;
        fire_alarm: number;
        fire_alarm_connected_to_central_station: number;
        sprinklers: number;
        percentage_of_building_sprinklered: number;
        // protection_class 
        nearest_fire_station: number;
        fire_hydrant_within_1000_ft: number;
        volunteer_department: number;
        mobile_tanks: number;

        violent_crime_score: number;
        stock: number;
        cord_and_wires: number;
        heavy_furniture: number;
        vehicle_storage: number;
        tools_and_equipment: number;
        wood_cloth_paper_plastic: number;
        oil_and_other_flammables: number;
        cooking: number;
        ansul_type_suppression_system: number;

        restaurent_bar_or_clud: number;
        manufacturing: number;
        mechanical_reapir: number;
        welding_and_fabrication: number;

        work_with_chemicals_or_oils: number;
        fire_extinguishers: number;
        extinguisher_inspected_and_tagged_in_last_3_years: number;
        wind_states: number;
        coastal: number;
        distance_to_coast: number;
        flood_zone: number;
        experienced_prior_flood: number;
        wildfire_probability: number;
        brush_area: number;
        quake_hazard: number;
        prior_losses_in_last_5_years: number;

    }

    const body = req.body as ReqBody;
    console.dir({body})
    const obj = _.omit(body, [
        'year_built',
        'nearest_fire_station',
        'fire_hydrant_within_1000_ft',
        'volunteer_department',
        'mobile_tanks'
    ])
    console.dir({obj})
    let sum = _.sum(_.values(obj));

    let protection_class_sum = _.sum(_.values(_.pick(body, [
        'nearest_fire_station',
        'fire_hydrant_within_1000_ft',
        'volunteer_department',
        'mobile_tanks'
    ])))

    console.dir({protection_class_sum})

    let protection_class_value = 0;

    if (protection_class_sum >= 100 && protection_class_sum <= 30) {
        protection_class_value = 0;
    } else if (protection_class_sum >= 20) {
        protection_class_value = 1;
    } else if (protection_class_sum >= 10) {
        protection_class_value = 3;
    } else if (protection_class_sum < 10) {
        protection_class_value = 5;
    }

    console.dir({protection_class_value})

    const risk = sum + protection_class_value + 9.40 ;

    console.dir({risk})

    return res.status(200).json({risk});
});



export default RiskRouter;