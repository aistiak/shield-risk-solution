"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const server = (0, app_1.default)(3000, index_routes_1.default);
server.listen();
//# sourceMappingURL=server.js.map