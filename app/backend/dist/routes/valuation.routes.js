"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValuationRoutes = (0, express_1.Router)();
const base = '/valuation';
ValuationRoutes.get(`${base}`, (req, res, next) => {
    return res.sendStatus(200);
});
exports.default = ValuationRoutes;
//# sourceMappingURL=valuation.routes.js.map