"use strict";
module.exports = rules => {
    const res = {};
    if (Array.isArray(rules)) {
        rules.forEach((rule) => {
            if (typeof rule === 'string') {
                res[rule] = { type: 'string' };
            } else {
                const { name, type } = rule;
                res[name] = { type };
            }
        });

        return res;
    } else {
        throw new Error(`unExpected type of rule ${typeof rules}`);
    }
};
