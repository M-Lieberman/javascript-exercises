 # DESTRUCTURING


[MDN]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```javascript
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


// in React:
function UserGitHubImg({username = 'ghost', ...props}) {
  return <img src={`https://github.com/${username}.png`} {...props} />
}
```

