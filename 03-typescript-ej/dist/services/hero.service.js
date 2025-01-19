"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroByid = void 0;
const heroes_1 = require("../data/heroes");
const findHeroByid = (id) => {
    return heroes_1.heroes.find(a => a.id === id);
};
exports.findHeroByid = findHeroByid;
