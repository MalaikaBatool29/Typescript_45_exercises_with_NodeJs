//Q#24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//1 Tests for equality and inequality with strings
//2 Tests using the lower case function
//3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//4 Tests using "and" and "or" operators
//5 Test whether an item is in a array
//6 Test whether an item is not in a array
//1 Tests for equality and inequality with strings
console.log("Equality test:", "Malaika Batool" === "Malaika Batool");
console.log("Ineuality test:", "Malaika Batool" !== "Hina");
//2 Tests using the lower case function
console.log("Lower case test:", ("MALAIKA BATOOL".toLowerCase()) === "malaika batool");
//3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Equality test:", 4 == 4);
console.log("Ineuality test:", 5 !== 4);
console.log("Greater than:", 8 > 3);
console.log("Less than:", 10 < 5);
console.log("Greater than or equal to:", 24 >= 18);
console.log("Less than or equal to:", 99 <= 55);
//4 Tests using "and" and "or" operators
console.log("And operator test:", 5 === 5 && 10 === 10);
console.log("Or operator test:", 5 === 5 || 10 === 10);
