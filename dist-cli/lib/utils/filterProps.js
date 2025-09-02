"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProps = filterProps;
function filterProps(obj, allowedKeys) {
    const result = {};
    for (const key of allowedKeys) {
        if (obj && typeof obj === 'object' && key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}
//# sourceMappingURL=filterProps.js.map