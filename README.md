execute-once
=============
Execute a high order function just once, successive calls will eventually return the previous result.

# Installation

$ npm install execute-once

# Usage


```
const executeOnce = require(execute-once)

Execute a void high order function

let logOnce = new executeOnce()

//Pass an high order function in the execute method
logOnce.execute(() => console.log('test'))
logOnce.execute(() => console.log('test')) // this call will not be executed

let sumOnce = new executeOnce()

let sum = (a,b) => a+b

let result = sumOnce.execute(() => sum(1,2))
console.log(result) // result is 3

let result2 = sumOnce.execute(() => sum(2,3))
console.log(result) // result is still 3 so for each new function you need to instantiate the executeOnce again

```
