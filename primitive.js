"use strict";
var x = 10;
var y = x;
console.log(x, y, 'first');
x = 20;
console.log(x, y, 'second');
var user1 = {
    name: "hary",
    prof: "officer"
};
var user2 = user1;
user2.prof = "progrmmer";
console.log(user1, user2);
