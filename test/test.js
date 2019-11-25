// Comments start with two slashes.

// variable
const foo = 4;
let bar = {
  color: "red",
  length: 10
};
const THIS_IS_CONSTANT = "abcde";

const house = {};
if (house.size == "big" && house.colour == "blue") {
  house.contains = "bear";
}

const grade = "A";
switch (grade) {
  case "A":
    console.log("Great job");
    break;
  default:
    console.log("Oy vey");
    break;
}

function myFunction(thing) {
  return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"

[1, 2, 3, 4].map(i => i * 2);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}
