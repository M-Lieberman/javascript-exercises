/**
 * DESTRUCTURING
 */

// MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

// this assigns the values FROM THE RIGHT to the variables on the LEFT
// the ... spread syntax allows an array expression or string to be expanded 
// in places where zero or more key value pairs are expected
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
[a, b, ...rest] = [60, 20, 30, 40, 50];

console.log(a);
// expected output: 60






// Code samples taken from this post
// https://kentcdodds.com/blog/javascript-to-know-for-react


// All three calculateStyle functions are the same
// Object defined in the parameter list
function calculateStyle1({ x, y: d, z = 4 }) {
    return Math.floor((x + d + z) / 3);
}

// Object destructured in the function
function calculateStyle2(obj) {
    const {x, y: d, z = 4} = obj;
    return Math.floor((x + d + z) / 3);
}

// Object destructured variable by variable
function calculateStyle3(obj) {
    const x = obj.x;
    const d= obj.y;
    const z = obj.z === undefined ? 4 : obj.z;
    return Math.floor((x + d + z) / 3);
}



module.exports = {
    calculateStyle1,
    calculateStyle2,
    calculateStyle3
};