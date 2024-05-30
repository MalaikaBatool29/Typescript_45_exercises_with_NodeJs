//Q#42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//Function to show magician names
function show_magicians(magicians:string[]) {
  magicians.forEach(name => console.log(name)
  )
}
//Function to make magicians great through map , it will modify array

function make_great(magicians:string[]) {
  return magicians.map(name => `The Great ${name}`)
}
//Define an array of magician names
const magician_names:string[] = ["David Copperfield", "Criss Angel", "Penn & Teller", "Dynamo"];

let greatMagicians = make_great(magician_names);

show_magicians(greatMagicians);


