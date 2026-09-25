// Imagine we are building a grading system:
// A score of 50 or more means "Pass".
// Anything less means "Fail".
// let score= 75;
// if(score >=50){
//     console.log("Pass");
// } else {
//     console.log("Fail");    
// }

// Suppose the rules change to give letter grades:
// 🌟 Grade A: Score is 90 or more
// 🎯 Grade B: Score is between 50 and 89 (inclusive)
// 🛑 Fail: Score is less than 50
// To check a second condition after an if, JavaScript uses else if (...).
   const score=45;
   if(score >=90){
    console.log("Grade A");
   } else if(score >=50){
    console.log("Grade B");
   } else {
    console.log("Fail");    
   }

// let userRole = "guest";
// let isVerified = false;
// if (userRole === "admin" || isVerified) {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied");
// }
// What will this print to the 
// console: "Access Granted" or "Access Denied"? And why?
//Access Denied   
// bcz userRole is guest and isVerified is false
// Not any side of or operator is true 
// so it will print Access Denied

// let age = 20;
// let message;
// if (age >= 18) {
//   message = "Adult";
// } else {
//   message = "Minor";
// }
// Using the ternary operator:
// let age = 20;
// let message = age >= 18 ? "Adult" : "Minor";
// console.log(message); // "Adult"

// Try converting this if...else block into a single-line ternary expression:
// let speed = 90;
// let status;
// if (speed > 80) {
//   status = "Overspeeding";
// } else {
//   status = "Normal";
// }
// How would you rewrite status using the ternary operator (? :)?

let speed = 90;
let status = speed > 80 ? "Overspeeding" : "Normal";
console.log(status); // "Overspeeding"

let dayNumber = 2;
switch (dayNumber) {
  case 1:
    console.log("Monday ");
    break;
  case 2:
    console.log("Tuesday ");
    break;
  case 3:
    console.log("Wednesday ");
    break;
  default:
    console.log("Another day ");
}

let role = "admin";
switch (role) {
  case "admin":
    console.log("Admin Dashboard");
  case "editor":
    console.log("Editor Panel");
    break;
  default:
    console.log("Viewer Mode");
}
// Notice there is no break after case "admin".
// What output will this print to the console?
// output will be:
// Admin Dashboard
// Editor Panel

// In real MERN applications, we often check if a 
// user provided an input without writing lengthy comparisons:
// let username = "Tanay";
// if (username) {
//   console.log("Welcome, " + username);
// } else {
//   console.log("Please enter a username!");
// }
// Since "Tanay" is a non-empty string, it is truthy, so the first block runs.

// Predict what will print for each of these two snippets:
// // Case A
// let userCount = 0;
// if (userCount) {
//   console.log("Users online!");
// } else {
//   console.log("No users online.");
// }

// // Case B
// let email = " "; // Note: there is a single space inside!
// if (email) {
//   console.log("Email provided");
// } else {
//   console.log("Missing email");
// }
// What will print for Case A and Case B?
//case A will print "No users online." because 0 is falsy.
//case B will print "Email provided" because a string with a space is truthy.

// && (AND): Looks for the first falsy value. If it finds one, it stops immediately and returns it. If all values are truthy, it returns the last truthy value.
// console.log("Apple" && 0 && "Banana"); // 0 (stops at first falsy)
// console.log("User" && "Profile");      // "Profile" (all truthy, returns last)

// || (OR): Looks for the first truthy value. If it finds one, it stops immediately and returns it.
// console.log("" || "Default Name");     // "Default Name"
// console.log("Logged In" || "Guest");   // "Logged In"

// 2. The Nullish Coalescing Operator (??) 
// What happens if you have a count of items:
// let cartCount = 0;
// let display = cartCount || 10;
// console.log(display); // prints 10!
// Why did it print 10? Because 0 is falsy, so || ignored it! But having 0 items in a cart is a valid number, not missing data.
// To solve this bug, JavaScript introduced ??:
// ?? only falls back if the value is strictly null or undefined.
// It keeps 0, "", and false!
// let cartCount = 0;
// let display = cartCount ?? 10;
// console.log(display); // prints 0 