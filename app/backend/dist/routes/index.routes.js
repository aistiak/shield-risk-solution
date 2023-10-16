"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const valuation_routes_1 = __importDefault(require("./valuation.routes"));
const risk_routes_1 = __importDefault(require("./risk.routes"));
const report_routes_1 = __importDefault(require("./report.routes"));
const RootRoutes = (0, express_1.Router)();
RootRoutes.use('/', valuation_routes_1.default);
RootRoutes.use('/', risk_routes_1.default);
RootRoutes.use('/', report_routes_1.default);
exports.default = RootRoutes;
//# sourceMappingURL=index.routes.js.map