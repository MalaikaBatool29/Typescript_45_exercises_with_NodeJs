//Q#43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Function to show magician names
function to_show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through map , it will modify array
function to_make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var famousMagicians = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];
//Making a copy of original array through .slice() function
var copy_magicians = famousMagicians.slice();
//Modify the copied array to include "The Great" with thier names
var theGreatMagicians = to_make_great(copy_magicians);
//Show both orginal and coppied arrays
//original array
console.log("Original array\n");
to_show_magician(famousMagicians);
//Copied array
console.log("\n Copied array\n");
to_show_magician(theGreatMagicians);
