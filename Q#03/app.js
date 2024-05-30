//Q#03 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var greatPerson = "Quaide - Azam muhammad ali jinnah";
//UPPERCASE :
console.log(greatPerson.toUpperCase());
//LOWERCASE :
console.log(greatPerson.toLowerCase());
//TITLECASE :
console.log(greatPerson.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
