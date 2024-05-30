//Q#23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car:string = 'subaru';

//TEST 1 : EQUALITY COMPARISON

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

//TEST 2 : INEQUALITY COMPARISON

console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')

//TEST 3 : STRICT EQUALITY COMPARISON

console.log("Is car === 'subaru'? I predict True.");
console.log(car ==='subaru')

//TEST 4 : STRICT INEQUALITY COMPARISON

console.log("Is car!== 'subaru'? I predict False.");
console.log(car!=='subaru')

//TEST 5 : GREATER THAN COMPARISON

console.log("Is car >'subaru'? I predict False.");
console.log(car >'subaru')

//TEST 6 : LESS THAN COMPARISON

console.log("Is car <'subaru'? I predict False.");
console.log(car <'subaru')

//TEST 7 : GREATER THAN OR EQUAL TO COMPARISON

console.log("Is car >='subaru'? I predict True.");
console.log(car >='subaru')

//TEST 8 : LESS THAN OR EQUAL TO COMPARISON     

console.log("Is car <='subaru'? I predict True.");
console.log(car <='subaru')

//TEST 9 : CHECKING TRUTHNESS

console.log("Is car? I predict true");
console.log(car);

//TEST 10 : CHECKING FALSEINESS

console.log("Is!car? I predict false");
console.log(!car);

