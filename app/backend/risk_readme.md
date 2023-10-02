# API Documentation for risk calcaulation 

## Endpoint

- **Endpoint URL:** [https://mysterious-frog-stockings.cyclic.app/risk/calculate]

## Request method 
POST
## Request

To make a successful API request, you need to provide the following request body parameters:

### Request Body (JSON)

```json
{
    "year_built": 1990,
    "construction_type": 0,
    "building_type": 0,
    "build_quality": 0,
    "number_of_stories": 0,
    "area": 0,
    "roof_type": 0,
    "functional": 0,
    "burglar_alarm": 0,
    "burglar_alarm_connected_to_central_station": 0,
    "fire_alarm": 0,
    "fire_alarm_connected_to_central_station": 0,
    "sprinklers": 0,
    "percentage_of_building_sprinklered": 0,
    "nearest_fire_station": 0,
    "fire_hydrant_within_1000_ft": 0,
    "volunteer_department": 0,
    "mobile_tanks": 0,
    "violent_crime_score": 0,
    "property_crime_score": 0,
    "stock": 0,
    "cord_and_wires": 0,
    "heavy_furniture": 0,
    "vehicle_storage": 0,
    "tools_and_equipment": 0,
    "wood_cloth_paper_plastic": 0,
    "oil_and_other_flammables": 0,
    "cooking": 0,
    "ansul_type_suppression_system": 0,
    "restaurent_bar_or_club": 0,
    "manufacturing": 0,
    "mechanical_repair": 0,
    "welding_and_fabrication": 0,
    "work_with_chemicals_or_oils": 0,
    "fire_extinguishers": 0,
    "extinguisher_inspected_and_tagged_in_last_3_years": 0,
    "wind_states": 0,
    "coastal": 0,
    "distance_to_coast": 0,
    "flood_zone": 0,
    "experienced_prior_flood": 0,
    "wildfire_probability": 0,
    "brush_area": 0,
    "quake_hazard": 0,
    "prior_losses_in_last_5_years": 0
}
