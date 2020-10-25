// JavaScript object 
const person = {
    name: "Paul Auster",
    occupation: "author",
    location: "New York",
    age: 51,
    getAge() {
        return this.age;
    },

};

console.log(person.getAge());

// destructuring from the person object into two variables
const {name, age} = person;
console.log(name);

// array destructuring
const myArray = [1, 2, 3]
const [x] = myArray;
console.log(x); // takes the first element

const [y, z] = myArray;
console.log(z); // z=2 takes the second element

function getAge(person) {
    return person.age;
}
console.log(getAge(person));

// can also be written as 
function getAgeDestructured({age}) {
    return age;
}
console.log(getAgeDestructured(person));


// rest operator ... (take rest of things in an object and build from them)
function getAge({age, ...rest}) {
    console.log(rest);
    return age;
}
console.log(getAge(person)); // returns the attributes and functions of getAge, excluding age (i.e. the rest of the attributes)

// spread operator ... (object creation mode)
function makeNewPerson({age, ...rest}) {
    console.log("The person is age: " + age);
    return {
        sport: "baseball",
        ...rest
    }
}
console.log(makeNewPerson(person)); // returns the attributes and functions of getAge, excluding age and new 

// real life type example
function reducer(state) {
    return {...state, name: "Bob"}
}


const makeNewAgePerson = ({ age}) => ({ age });
