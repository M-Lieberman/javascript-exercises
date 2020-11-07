# javascript-practice

Repo for JavaScript exercises from books e.g. Eloquent JavaScript, JavaScript and JQuery), code challenges or code mastery sites (e.g. CodeWars, LeetCode, Interview Cake).

All functions have been developed with full TDD using the (Jest)[https://jestjs.io/] testing library.

Running the tests
Node.js must be installed.

First, clone this repository and install dependencies:
```
npm install
```

To run the tests:
```
npm test
```

### JavaScript Basics and Handy Functions for Puzzles

#### falsey value example
```javascript
[0, null, undefined, false, ""]
```

#### loops

##### for loop
```javascript
for (let i = 0; i < arr.length; i++) {
  // do something with arr[i]
}
```

##### forEach
- Available on arrays only
- Access every item 1 by 1
- Very versatile, do whatever you want with each item in an array

```javascript
const arr = ["foo", "bar", "baz"];

arr.forEach(function(item) {
  // do something with item
});
```




#### functions
```javascript
```


#### Regex 
**test** returns boolean
```javascript
  // regex for Manchester postcodes
  const re = new RegExp('^M\\d');
  return re.test(person.address.postCode);
```

**search** returns position of the match
```javascript
var str = "Visit Tokyo!";
var n = str.search("Tokyo"); // returns 6
```

**replace** replaces the first string argument with the second
```javascript
var str = "Visit Sydney!";
var res = str.replace("Sydney", "Hong Kong");
``` 


#### filter
- Available on arrays only
- Access every item 1 by 1
- Used to select only specific items from an array
- Return `true` to keep an item, `false` to reject
- Remember to save the new array in a variable
```javascript
const filtered = nums.filter((n) => Number.isInteger(n));
```
#### map
```javascript
return users.map(function (user) {
    return user.data.city.displayName;
  });
// or as an arrow function to a variable 
  const newArr = users.map((user) => user.data.city.displayName);
```

#### reduce - returns the total of the values in the array
```javascript
const data = [5, 10, 15, 20, 25];
const res = data.reduce((total,currentValue) => total + currentValue);

// alternative syntax
// also assigning an initial value of 29 (usually takes the first array item)
data = [11, 21, 19, 18, 46]
const reducer = (accumulator, currentValue) => accumulator + currentValue
result = data.reduce(reducer, 29);
```

