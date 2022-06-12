const add = function(...a) {
	let x = 0;
  a.forEach(e => x += e);
  return x;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	let x = 0;
  a.forEach(e => x += e);
  return x;
};

const multiply = function(a) {
  let x = 1;
  a.forEach(e => x *= e);
  return x;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	let x = 1;
  for (let i = 1; i <= a; i++) {x *= i};
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
