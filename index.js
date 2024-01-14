 // 1.

const value1="5"
const value2=9
let sum =value1 + value2

console.log(sum)
 // a.59
// the value1 is a string and the value2 is a numeric value when we use the + operator.  between a string and a number in JavaScript
// it performs concatenation instead of addition

// b.const value1="5"
const value1="5"
const value2=9
let sum = number(value1) + (value2)

console.log(sum)   
// Error    . number is not defined

// c.
console.log(![])  
// false
// The logical NOT operator negates the truthiness, so ![] evaluates to false
console.log([]==![])  // true
// 
console.log([]===![])  // false
// 
console.log(null==false)  // false
// 
console.log(null==true)  // false
//
// D.
console.log(-"giddyup"+409)  // NaN
// The unary minus (-) operator is attempting to convert the string "giddyup" to a numeric value. Since the string does not represent a valid numeric value, the result is NaN
// Adding NaN to any numeric value results in NaN


// 2
let MyVar_1=10+""
console.log(MyVar_1)
 // 10

let MyVar_2=10.5+""
console.log(MyVar_2) 
// 10.5


let MyVar_3=-10.5+""
console.log(MyVar_3) 
// -10.5

let MyVar_4=true+""
console.log(MyVar_4) 
// true



// 4.  
// The == operator compares the values of two variables after performing type conversion if necessary. 
// On the other hand, the === operator compares the values of two variables without performing type conversion.

//   5.
//  Var
=> function Scope
=>Variables declared with var are hoisted to the top of their scope.
=>Supports multiple declaration in a scope
=>Can be declared anywhere in the function 
=> var can be redeclared within the same scope without any error
  
// let

=> let are block-scoped. They are only accessible within the block  where they are declared
=>only one declaration in scope
=> if you try to use a let variable before its declaration,get a ReferenceError.
=>let cannot be redeclared in the same scope


// 6.Implicit type coercion

Implicit type coercion in JavaScript occurs when the language automatically converts one data type to another without explicit instructions from the developer. 
This can sometimes lead to unexpected behavior if not carefully managed.
 One common scenario is when different data types are used together in operations

 eg:let number = 10;
 let string = "5";
 
 let result = number + string;
 
 console.log(result); // Output: 105

//  String concatenation


//  7.
JavaScript is considered a dynamically typed language. In a dynamically typed language like JavaScript, variable types are determined at runtime, 
not at compile time.
 This means that you don't need to declare the type of a variable explicitly, and the type of a variable can change during the execution of a program


//  8.

In JavaScript, NaN stands for "Not a Number."
 It is a special value representing an unrepresentable or undefined value resulting from an operation that should return a valid number, but cannot


//  9.

// passed by value
Primitive data types (like numbers, strings, booleans, etc.) are passed by value in JavaScript. When a primitive is passed as an argument to a function, a copy of the actual value is passed to the function. 
Changes made to the parameter inside the function do not affect the original value outside the function

// passed by reference
Objects and arrays in JavaScript are passed by reference. When an object or array is passed as an argument to a function, 
a reference to the original object or array is passed, not a copy. 
Changes made to the object or array inside the function affect the original object or array outside the function.


// 10.immediately invoked

An immediately invoked function expression  in JavaScript is a function that is defined and executed immediately after its creation. 
It is a design pattern often used to create a private scope for variables, preventing them from polluting the global scope


// 11.Strict mode

Strict mode is a feature introduced in ECMAScript 5 (ES5) to help developers write more reliable and maintainable JavaScript code by catching common mistakes and preventing the use of certain error-prone features. 
When you enable strict mode in JavaScript, the interpreter imposes a stricter set of rules on your code

=>Variables must be declared with var, let, or const before being used.
=>Variables declared without var, let, or const are not automatically assigned to the global object.
 This helps avoid accidental global variable creation
 =>No Assigning to Read-Only Properties
 =>Functions cannot have duplicate parameter names.(no duplicate parameter names)


// 12. higher-order function

=>Functions as Arguments:
A higher-order function can take other functions as parameters. This is often seen in functions like map, filter, and reduce that operate on arrays.

=>Functions as Return Values:
A higher-order function can return a new function. This is often useful for creating closures or for creating functions based on certain conditions


// 13.this keyword in javascript

In JavaScript, the this keyword refers to the current execution context or the object to which the function or method belongs.
 The value of this is determined by how a function is invoked, and it can behave differently in various scenarios



//  14.
// a.
function doSomething(){
    console.log(this);
}

doSomething() 

// window {.....}

// b.
var obj={
    name:"vivek",
    getName:function(){
        console.log(this.name)
    }
}

obj.getName
// Output:"vivek"


// c.
var obj={
    name:"vivek",
    getName:function(){
        console.log(this.name)
    }
}

obj.getName

var getName = obj.getName
var obj2={name:"akshay",getName};
obj2.getName()

//Output: akshay

// d.
var obj1={
    address:"mumbai,india",
    getAddress:function(){
         console.log(this.address)
    }
}
var getAddress=obj1.getAddress;
var obj2={name:"akshay"};
obj2.getAddress()

//Output: TypeError: obj2.getAddress is not a function


// 15
=>call() method

The call method is used to invoke a function with a specified this value and individual arguments provided one by one.

eg:function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: "John" };
  
  sayHello.call(person, "Hello");
  // Output: Hello, John!


  =>apply() Method

  The apply method is similar to call, but it takes an array or an array-like object as its second argument, which is used as the arguments for the function

  eg:function sayHello(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: "John" };
  
  sayHello.apply(person, ["Hello", "!"]);

  // Output: Hello, John!

  =>bind() Method

  eg:function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: "John" };

const sayHelloToJohn = sayHello.bind(person, "Hello");
sayHelloToJohn();
// Output: Hello, John!




// 16.
Own Call 

Function.prototype.myCall = function (context, ...args) {
    context = context ;
  
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
  
    const result = context[uniqueKey](...args);
  
    delete context[uniqueKey];
  
    return result;
  };
  
  function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: "John" };
  
  sayHello.myCall(person, "Hello");
  // Output: Hello, John!



  Own bind

  Function.prototype.myBind = function (context, ...boundArgs) {
    const originalFunction = this;
  
    return function (...args) {
      return originalFunction.apply(context, boundArgs.concat(args));
    };
  };
  
  
  function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: "John" };
  
  const sayHelloToJohn = sayHello.myBind(person, "Hello");
  sayHelloToJohn();


  .Own apply

  Function.prototype.myApply = function (context, argsArray) {
    context = context || globalThis;
  
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
  
    const result = context[uniqueKey](...argsArray);
  
    delete context[uniqueKey];
    return result;
  };
  
  function sayHello(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: "John" };
  
  sayHello.myApply(person, ["Hello", "!"]);
  // Output: Hello, John!

//   17.Currying in javaScript

Currying is a functional programming technique in JavaScript where a function is transformed into a sequence of functions, each taking a single argument.
 The process of currying involves breaking down a function that takes multiple arguments into a series of functions that each takes a single argument

 eg:function curryAdd(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }
  
  console.log(curryAdd(1)(2)(3));
//   ans:6

// 18.Scope

In JavaScript, the concept of scope refers to the region of code where a variable is declared and can be accessed.
 Scopes can be nested, and the scope chain is the hierarchy of scopes that determines the visibility and accessibility of variables


 eg:// Global scope
 let globalVariable = "I am global";
 
 function outerFunction() {
   // Outer function scope
   let outerVariable = "I am in outer function";
 
   function innerFunction() {
     // Inner function scope
     let innerVariable = "I am in inner function";
     console.log(globalVariable);    // Accessible (global scope)
     console.log(outerVariable);    // Accessible (outer function scope)
     console.log(innerVariable);    // Accessible (inner function scope)
   }
 
   innerFunction();
 
   // This will throw an error because innerVariable is not accessible here
   // console.log(innerVariable);
 }
 
 outerFunction();
 
 // This will throw an error because outerVariable and innerVariable are not accessible here
 // console.log(outerVariable);
 // console.log(innerVariable);



//  19.Closures

Closures are a fundamental concept in JavaScript, and they occur when a function retains access to variables from its outer (enclosing) scope even after that scope has finished executing. In other words,
 a closure allows a function to "close over" and capture variables from its lexical scope, creating a persistent reference to those variables

 eg:function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable); 
    }
  
    return innerFunction; 
  }
  
  const closureFunction = outerFunction(); 
  closureFunction(); // Outputs: "I am from the outer function"


//   20.

In JavaScript, each object has a prototype, and these prototypes form a prototype chain. 
The prototype is an object from which the current object inherits properties and methods. 
Understanding object prototypes is crucial to working with JavaScript objects and their inheritance model.


// 21.
// a."You both are wasted"
// b.NaN
// 3
// c.string
// number
