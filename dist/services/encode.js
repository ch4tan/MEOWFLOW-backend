"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encode = (target, round) => {
    let result = target.slice();
    for (let i = 0; i < round; i++)
        result = btoa(result);
    return result;
};
exports.default = encode;
