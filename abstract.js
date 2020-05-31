"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snake = exports.dog = exports.cat = void 0;
//eg 2
var cat = /** @class */ (function () {
    function cat() {
    }
    cat.prototype.meow = function () {
        console.log('meowing');
    };
    return cat;
}());
exports.cat = cat;
var dog = /** @class */ (function () {
    function dog() {
    }
    dog.prototype.bark = function () {
        console.log('barking');
    };
    return dog;
}());
exports.dog = dog;
var snake = /** @class */ (function () {
    function snake() {
    }
    snake.prototype.sliding = function () {
        console.log('sliding');
    };
    return snake;
}());
exports.snake = snake;
// property depend on object created
//eg 1
// class action{
// private ammo=10;
// private readonly name;
// constructor(name:string)
// {
//     this.name=name;
// }
// shoot(){
//     this.ammo=this.ammo -1;
//     console.log(this.name+"  shooting  " +this.ammo  +"ammo");
// }
// }
// class player extends action
// {
// }
// class enemy extends action{
// }
// const p1 =new player("hary");
// const e1 =new enemy("enemy");
// p1.shoot();
// e1.shoot();
// p1.shoot();
// p1.shoot();
