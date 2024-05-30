//Q#18: Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Stores the location in array and print in its original order
var desiredLocations = ["Switzerland", "Paris", "London", "NewYork", "Turkey"];
console.log(desiredLocations);
//Print array in alphabetical order
console.log(desiredLocations.sort());
//Print the original list again (to show its unchanged)
console.log(desiredLocations);
//Print array in reverse alphabetical order
console.log(desiredLocations.sort().reverse());
//Print the original list again (to show its unchanged)
console.log(desiredLocations);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log(desiredLocations.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
desiredLocations.reverse();
console.log(desiredLocations);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
desiredLocations.sort();
console.log(desiredLocations);
