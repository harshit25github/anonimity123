function bringbread() {
    return new Promise(function (resolve, reject) {
        if (isbreadavailable()) {
            resolve('here is your available');
        }
        else if (iseggavailable()) {
            resolve('egg is available');
        }
        else
            reject('nothing available');
    });
}
bringbread().then(function (data) {
    console.log(data);
})["catch"](function (err) {
    console.log(err);
});
function isbreadavailable() {
    return true;
}
function iseggavailable() {
    return false;
}
console.log("hii");
