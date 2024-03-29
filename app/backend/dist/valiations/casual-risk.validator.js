"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JoiValidator_1 = __importDefault(require("../utils/JoiValidator"));
const Joi = require('joi');
const casualRiskSchema = Joi.object({
    years_in_business: Joi.number().default(0),
    experience_in_field: Joi.number().default(0),
    licensed: Joi.number().default(0),
    current_year_sales: Joi.number().default(0),
    current_year_payroll: Joi.number().default(0),
    current_year_subcontractor_costs: Joi.number().default(0),
    average_value_of_project: Joi.number().default(0),
    any_autos_or_equipment: Joi.number().default(0),
    prior_coverage: Joi.number().default(0),
    prior_claims_or_losses: Joi.number().default(0),
    formal_safety_program: Joi.number().default(0),
    flammables_explosives_chemicals: Joi.number().default(0),
    abuse_discrimination: Joi.number().default(0),
    do_employees_and_subcontractors_have_at_least_3_years_experience: Joi.number().default(0),
    subs_allowed_to_work_without_insurance: Joi.number().default(0),
    do_subcontractors_carry_limits_equal_or_greater_to_yours: Joi.number().default(0),
    any_operations_involving_hazard_material: Joi.number().default(0),
    any_use_of_leased_employees: Joi.number().default(0),
    any_work_above_ground: Joi.number().default(0),
    customers_on_premise: Joi.number().default(0),
    are_employees_subs_licensed: Joi.number().default(0),
    background_checks: Joi.number().default(0),
    is_training_offered: Joi.number().default(0),
    safety_gear_worn: Joi.number().default(0),
    children_regularly_on_premises: Joi.number().default(0),
    any_uncorrected_fire_safety_violations: Joi.number().default(0),
    any_explosives_or_blasting: Joi.number().default(0),
    any_excavation: Joi.number().default(0),
    any_parking_facilities: Joi.number().default(0),
    swimming_pool: Joi.number().default(0),
    demolition: Joi.number().default(0),
    crimes: Joi.number().default(0),
    promo_pages_on_safety: Joi.number().default(0),
    wet_floors_possible: Joi.number().default(0),
    overhead_equipment: Joi.number().default(0),
    first_aid_kits: Joi.number().default(0),
    any_cracks_uneven_or_debris_filled_walking_areas: Joi.number().default(0),
    warning_signs: Joi.number().default(0),
    guardrails: Joi.number().default(0),
    exposed_wiring: Joi.number().default(0),
    cameras_alarms: Joi.number().default(0),
    animals: Joi.number().default(0),
    fence: Joi.number().default(0),
    maintenance_on_equipment: Joi.number().default(0),
    smoking: Joi.number().default(0),
    locked_overnight: Joi.number().default(0),
    storage_for_others: Joi.number().default(0),
    any_contracted_security: Joi.number().default(0),
    equipment_leased_to_others: Joi.number().default(0),
    equipment_leased_from_others: Joi.number().default(0),
    operate_vehicles: Joi.number().default(0),
    private_passenger: Joi.number().default(0),
    trucks: Joi.number().default(0),
    buses: Joi.number().default(0),
    vehicle_maintenance: Joi.number().default(0),
    all_drivers_licensed: Joi.number().default(0),
    tenants_carry_coverage: Joi.number().default(0),
    foreign_products: Joi.number().default(0),
    draw_plans_for_others: Joi.number().default(0),
    install_service_demonstrate_products: Joi.number().default(0),
    guarantees_warranty_or_hold_harmless_agreements_in_place: Joi.number().default(0),
    aerospace_products: Joi.number().default(0),
    recalled_products: Joi.number().default(0),
    other_s_product_sold_under_insured_s_label: Joi.number().default(0),
    insured_s_product_sold_under_other_s_label: Joi.number().default(0),
    product_ingested: Joi.number().default(0),
    work_inspected: Joi.number().default(0),
    any_waiver_or_hold_harmless_in_place: Joi.number().default(0),
});
const CasualRiskRequestValidator = (0, JoiValidator_1.default)(casualRiskSchema);
exports.default = CasualRiskRequestValidator;
//# sourceMappingURL=casual-risk.validator.js.map