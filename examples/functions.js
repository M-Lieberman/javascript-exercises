// destructuring
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