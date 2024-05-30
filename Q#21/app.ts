//Q#21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface items {
name: string,
price: number,
}

//Creating an Object
const chocolates:items = {
name: "DairyMilk",
price: 100,
}

console.log(`name: ${chocolates.name}, price: $${chocolates.price}`);
