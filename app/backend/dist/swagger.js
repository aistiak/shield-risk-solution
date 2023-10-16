"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'api',
            version: '1.0.0',
            description: '',
        },
        servers: [
            { url: 'http://localhost' },
            { url: 'https://mysterious-frog-stockings.cyclic.app' },
            { url: 'https://risk-shield-solution.onrender.com' },
        ],
    },
    apis: [
        "src/routes/*.ts"
    ]
};
exports.specs = (0, swagger_jsdoc_1.default)(options);
//# sourceMappingURL=swagger.js.map