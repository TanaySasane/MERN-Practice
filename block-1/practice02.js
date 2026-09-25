// // Predict what will print in the console for these three lines:
// console.log(false || "Hello");
// console.log("Hello" && "World");
// console.log(null ?? "Default");
// // What outputs do you expect for each?
// // Hello
// // World
// // Default

// console.log(0 && "JavaScript");
// console.log("React" && "Node");
// Remembering that && returns the first falsy value it finds (or the last value if everything is truthy):
// What do you think prints for each line?
// //0
// //Node

// Challenge 1: E-Commerce Discount Engine 
// Write an if...else if...else structure (or ternary) that calculates a discount based on a cart total:
// If totalAmount is 1000 or more, set discount to 20% (print "20% discount applied").
// If totalAmount is 500 or more (but less than 1000), set discount to 10% 
// (print "10% discount applied").
// Otherwise, print "No discount".
let totalAmount = 750;
if(totalAmount >= 1000){
    console.log("20% discount applied");
} else if(totalAmount >= 500){
    console.log("10% discount applied");
} else {
    console.log("No discount");
}

// Challenge 2: Traffic Light Simulator 🚦
// Now let's practice the switch statement.
// Write a switch block that checks a variable trafficLight:
// If "red", print "Stop 🛑"
// If "yellow", print "Slow down ⚠️"
// If "green", print "Go 🟢"
// If it is anything else, print "Invalid signal ❓" (use default)
let trafficLight = "yellow";
switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

// Challenge 3: User Authentication & Fallbacks 👤
// Here is our final Day 2 challenge testing ternary, short-circuiting, and nullish coalescing.
// You have a user object property or variable representing an input name:
// let enteredName = ""; // The user submitted an empty string
// let defaultName = "Anonymous";
// Use || (OR) to choose between enteredName and defaultName. What does it evaluate to?
// Use ?? (Nullish Coalescing) to choose between enteredName and defaultName. What does it evaluate to?
// What will each expression print, and why are they different?
let enteredName = ""; 
let defaultName = "Anonymous";
console.log(enteredName || defaultName); // Anonymous
console.log(enteredName ?? defaultName); // ""

// Challenge 4: The Login Guard (Logical Operators & Short-Circuiting) 🔐
// In real React and Node apps, we often guard views or API responses using combined conditions:
// let isLoggedIn = true;
// let userRole = "user"; // could be "admin", "editor", or "user"
// let isEmailVerified = false;
// Task:
// Write an expression using if...else (or ternary) that allows access only if:
// The user is logged in (isLoggedIn) AND
// The user is either an "admin" OR has their email verified (isEmailVerified).
// If allowed, print "Access Granted ✅". Otherwise, print "Access Denied 🚫".
// How would you structure that condition?
let isLoggedIn = true;
let userRole = "user"; // could be "admin", "editor", or "user"
let isEmailVerified = false;
if(isLoggedIn && (userRole === "admin" || isEmailVerified)) {
    console.log("Access Granted ✅");
} else {    
    console.log("Access Denied 🚫");
}   

// Challenge 5: Configuration Fallback Tracing ⚙️
// What will each console.log print? Trace the output step by step:
// let customPort = 0;
// let defaultPort = 3000;

// let portA = customPort || defaultPort;
// let portB = customPort ?? defaultPort;

// console.log(portA);
// console.log(portB);
// What numbers will portA and portB display?
//port A will display 3000 because 0 is falsy and the || operator returns the first truthy value.
//port B will display 0 because the ?? operator only checks for null or undefined, and 0 is neither.