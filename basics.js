// // 1.Print your name, city, and learning goal.
// console.log("Tanay");
// console.log("Kopargaon");
// console.log("For interview as well as pratics for project ");

// // 2. Create const variables for your name and project name.
// const name1="Tanay";
// const projectName ="ResolveHub";
// console.log(name1,projectName);

// // 3. Create a let variable named hoursStudied, then change it.
// let hoursStudied=15;
// hoursStudied=12;
// console.log(hoursStudied);

// // 4. Store an issue title, category, and priority in variables.
// let issueTitle="bug";
// let issueCategory="UI";
// let issuePriority="high";
// console.log(issueTitle,issueCategory,issuePriority);

// // 5.Print the typeof result of a string, number, boolean, null, 
// // undefined, object, and array.
// console.log(typeof "Tanay" );
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof {name:"Tanay",age:23});
// console.log(typeof [1,2,3]);

// //6. Create variables for total issues and resolved issues; 
// // calculate pending issues.
// let totalIssues=100;
// let resolvedIssues=70;
// let pendingIssues=totalIssues-resolvedIssues;
// console.log(pendingIssues);

// //7. Calculate whether 17 is odd or even.
// let number= 17;
// console.log(number % 2 === 0 ? "Even" : "Odd");

// //8. Convert "50" to a number and add 10.
// let num= "50";
// console.log(Number(num) + 10);

// //9. Convert 500 to a string and join it with " points".
// let num2=500;
// console.log(String(num2) + " points");

// //10. Check whether a user is both logged in and an admin.
// let loggedIn = true;
// let isAdmin = true;
// console.log(loggedIn && isAdmin); //true

// //11. Write one example each using &&, ||, and !.
// let loggedInn = true;
// let isAdminn =false;
// console.log(loggedInn && isAdminn);  //false
// console.log(loggedInn || isAdminn);  //true
// console.log(!isAdminn);  //true

// //12. Compare 10 and "10" using both == and ===; explain the result in a comment.
// console.log(10 == "10"); //true bcz it only compared values not its datatype.
// console.log(10 === "10"); //false bcz it compared both values and datatype.

// // 13. Create let assignedAdmin; and print it.
// let assignedAdmin;
// console.log(assignedAdmin);

// // 14. Create an issue object whose assignedTo value is null.
// const issue = {
//   title: "Not Working",
//   assignedTo: null
// };

// console.log(issue);

// // 15. Check whether an issue title is empty.
// const titleToCheck = "";

// if (titleToCheck === "") {
//   console.log("Issue title is empty");
// } else {
//   console.log("Issue title is not empty");
// }
function addWrong(a, b) {
  console.log(a + b);
}

const total = addWrong(10, 5);
console.log(total); // undefined