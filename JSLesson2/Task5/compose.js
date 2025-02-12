// Write a function compose(f, g) that takes two functions f and g, and returns a new function that applies g first, then f to the result.

function add2(x) {
  return x + 2;
}
function multiply3(x) {
  return x * 3;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const composed = compose(add2, multiply3);
console.log(composed(4)); // (4 * 3) + 2 = 14
