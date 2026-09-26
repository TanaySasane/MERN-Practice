// Write a standard for loop that counts and logs the numbers from 1 to 5 (inclusive) in the console:
// Expected output:
// 1
// 2
// 3
// 4
// 5
//How would you set up the initialization, condition, and update expressions inside for (...)?
// for(let i=1;i<=5;i++){
//     console.log(i)
// }


// How would you write a for loop using let to find the sum of all numbers
// from 1 to 5 ($1 + 2 + 3 + 4 + 5 = 15$) and print the final total?
let total=0;
for(let i=1;i<=5;i++){
    console.log(total+=i);
    // total+=i;
}
console.log(total);

//If the condition never becomes false, the program hangs and crashes the browser or Node process:
// let count=1;
// while(count<=5){
//     console.log(count);
// }

//How would you rewrite our countdown timer using a while loop to count backwards from 3 down to 1, 
// and then print "Blast off! " after it finishes?
let count=3;
while(count>=1){
    console.log(count);
    count--;
}
console.log("Blast off!");