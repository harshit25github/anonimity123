"use strict";
var tuple = ['st', 3, true];
function keypressed(key, test) {
    if (key === 0 /* up */)
        console.log("up key is pressed");
    else if (key === 1 /* down */)
        console.log("down key ressed");
    else if (key === 2 /* left */)
        console.log("left key is pressed");
    else
        console.log("right key presssed");
}
var user = [{ firstname: "hary", verified: true }];
keypressed(4);
