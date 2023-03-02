import intersectionBy from "../intersectionBy.js";

const a = [1.2, 2.3, 3.3], b = [1.1, 4.1, 3.1]

const c = intersectionBy(a, b, Math.floor)
console.log(c)
