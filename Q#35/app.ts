//Q#35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = [
{name: "cat", description:"A cat is a cuddly and independent friend."},
{name: "Dog", description: "A dog would make a loyal and playful companion."},
{name:"Rabbit", description:"A rabbit brings joy with its soft fur and curious nature"},
];

//Print each animal name

for (let animal of animals) {
    console.log(animal.name);
    
}
//Print statement about each animal

for (let ani of animals) {
    console.log(ani.description);
    
}

//Print common characteristic

console.log("All these animals can make wonderful house pets!");
