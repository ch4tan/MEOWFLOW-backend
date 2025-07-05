"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decode = (target, round) => {
    let result = target.slice();
    for (let i = 0; i < round; i++)
        result = atob(result);
    return result;
};
exports.default = decode;
