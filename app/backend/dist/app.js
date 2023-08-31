"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
function GetAppServer(PORT, routes) {
    const app = (0, express_1.default)();
    app.use((0, body_parser_1.default)());
    app.use(routes);
    app.all('/', (req, res) => {
        //@ts-ignore
        const rand = parseInt(Math.random() * 10000);
        return res.status(200).json({ rand });
    });
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