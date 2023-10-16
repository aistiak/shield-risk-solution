"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const risk_validator_1 = __importDefault(require("../valiations/risk.validator"));
const dayjs_1 = __importDefault(require("dayjs"));
const casual_risk_validator_1 = __importDefault(require("../valiations/casual-risk.validator"));
const _ = require('lodash');
const RiskRouter = (0, express_1.Router)();
const base = '/risk';
// RiskRouter.get(`${base}/`, (req, res) => {
//     return res.sendStatus(200);
// });
RiskRouter.post(`${base}/calculate`, risk_validator_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.dir({ body });
    const obj = _.omit(body, [
        'year_built',
        'nearest_fire_station',
        'fire_hydrant_within_1000_ft',
        'volunteer_department',
        'mobile_tanks'
    ]);
    console.dir({ obj });
    let sum = _.sum(_.values(obj));
    let protection_class_sum = _.sum(_.values(_.pick(body, [
        'nearest_fire_station',
        'fire_hydrant_within_1000_ft',
        'volunteer_department',
        'mobile_tanks'
    ])));
    console.dir({ protection_class_sum });
    let protection_class_value = 0;
    if (protection_class_sum >= 100 && protection_class_sum <= 30) {
        protection_class_value = 0;
    }
    else if (protection_class_sum >= 20) {
        protection_class_value = 1;
    }
    else if (protection_class_sum >= 10) {
        protection_class_value = 3;
    }
    else if (protection_class_sum < 10) {
        protection_class_value = 5;
    }
    console.dir({ protection_class_value });
    const age = (0, dayjs_1.default)().year() - body.year_built;
    let year_built_value = 0;
    if (body.year_built > 1975) {
        year_built_value = (age / 1127) * 100;
    }
    else if (body.year_built < 1975) {
        year_built_value = (age / 1435) * 100;
    }
    let risk = year_built_value + sum + protection_class_value + 9.40;
    console.dir({ risk });
    risk = Number(Math.floor(risk));
    console.dir({ risk });
    return res.status(200).json({ risk });
}));
RiskRouter.post(`${base}/casual/calculate`, casual_risk_validator_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.dir({ body });
    console.dir({ body });
    let sum = _.sum(_.values(body));
    return res.status(200).json({ sum });
}));
exports.default = RiskRouter;
//# sourceMappingURL=risk.routes.js.map