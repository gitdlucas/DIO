function getName() {
    return "Daniel Lucas dos Santos";
}
var nomefn = getName()


function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;
logFnResult(getName);