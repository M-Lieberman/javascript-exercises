## SPREAD SYNTAX

[MDN link}(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript 
// for function calls
myFunction(...iterableObj);

// for array literals or string
[...iterableObj, 4, 'five', 6];

// for object literals (ECMAScript 2018)
let objClone = { ...obj };
```



### examples
```javascript
 // Apply for a new operator
 let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
```

```javascript
 function sum(x, y, z) {
     return x + y + z;
 }

 const numbers = [1, 2, 3];

 // here ... allows passing an array with multiple elements to the function without specifying the number
 console.log(sum(...numbers));
// expected output: 6
 
// apply takes arguments as an array
console.log(sum.apply(null, numbers));
// expected output: 6
```

