//Q#34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizzas:string[] = ["Fajita pizza", "Chicken Tikka pizza","Pepperoni pizza"];

// Define your favorite pizza names in an array and print each pizzas name

for(let pizza of pizzas) {
    console.log(pizza);
}

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

for (let fav_pizza of pizzas) {
    console.log(`I like ${fav_pizza}`);
    
}

// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log(`First of all, I think ${pizzas[0]} is my favorite food because it is very tasty. It tastes good at any time of the day. We've been eating it every Friday night for as long as I can remember`);
