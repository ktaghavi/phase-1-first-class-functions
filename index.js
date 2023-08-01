function receivesAFunction (callback) {
    callback()
};

function returnsANamedFunction () {
    return function named() {
        console.log("My name is Kam")
    }
};

function returnsAnAnonymousFunction () {
    return function (){}
};