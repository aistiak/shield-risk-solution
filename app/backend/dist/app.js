"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const cors_1 = __importDefault(require("cors"));
function GetAppServer(PORT, routes) {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: true,
        credentials: true
    }));
    app.use((0, body_parser_1.default)());
    app.use(routes);
    app.all('/', (req, res) => {
        //@ts-ignore
        const rand = parseInt(Math.random() * 10000);
        return res.status(200).json({ rand });
    });
    app.use((error, req, res, next) => {
        try {
            const status = error.status || 500;
            const message = error.message || 'Something went wrong';
            res.status(status).json({ message });
        }
        catch (error) {
            next(error);
        }
    });
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.specs));
    return {
        listen() {
            app.listen(PORT, () => {
                console.log(` -- server started on port ${PORT} ---`);
            });
        }
    };
}
exports.default = GetAppServer;
//# sourceMappingURL=app.js.map