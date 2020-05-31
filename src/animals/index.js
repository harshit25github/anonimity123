"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dogg = exports.snakee = void 0;
var snake_1 = __importDefault(require("./snake"));
exports.snakee = snake_1.default;
var dog_1 = require("./dog");
Object.defineProperty(exports, "dogg", { enumerable: true, get: function () { return dog_1.dogg; } });
