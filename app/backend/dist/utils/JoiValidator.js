"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidator = exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.HttpException = HttpException;
const JoiValidator = (validationSchema, key = 'body') => {
    return (req, res, next) => {
        const data = req[key];
        console.log(data);
        const { error } = validationSchema.validate(data, {
            errors: {
                wrap: false,
            },
        });
        console.log(error);
        if (error) {
            next(new HttpException(400, error));
        }
        next();
    };
};
exports.JoiValidator = JoiValidator;
exports.default = exports.JoiValidator;
//# sourceMappingURL=JoiValidator.js.map