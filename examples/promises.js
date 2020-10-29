const getUser = require("./getUser");

console.log("start");

getUser().then(user => {
    console.log(user);
});
//console.log(getUser());
console.log(user)

console.log("end");


// fetch("https://api.randomuser.me/?nat=US&results=10")
// .then(response => response.json())
// .then(members => console.log(members))
// .catch(err => console.error(err))
