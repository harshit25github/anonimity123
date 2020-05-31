"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./animals/dog");
var snake_1 = __importDefault(require("./animals/snake"));
var dog1 = new dog_1.dogg();
var snk = new snake_1.default();
dog1.bark();
snk.bite();
