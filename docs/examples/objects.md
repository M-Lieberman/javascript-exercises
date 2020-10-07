### Returning Objects

This throws a syntax error
```javascript
const person = (firstName, lastName) => {
    first: firstName,
    last: lastName
}

console.log(person("Bob", "Watkins"));
// throws a Syntax error: Unexpected token ':'
```
It needs parentheses wrapped around the object being created
```javascript
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
})

console.log(person("Bob", "Watkins"));
// output: { first: 'Bob', last: 'Watkins' }
```