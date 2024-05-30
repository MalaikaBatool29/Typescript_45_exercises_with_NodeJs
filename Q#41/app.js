//Q#41 :Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Define a function to print each magician name from an array
function show_magicians(magicianNames) {
    magicianNames.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians name
var magicianNames = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];
//Call the function to show magician's names
show_magicians(magicianNames);
