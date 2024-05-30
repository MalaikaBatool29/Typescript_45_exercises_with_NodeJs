//Q#06
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nameWithWhiteSpaces:string = "\t \n Malaika Batool \t \n";
console.log("Name With White Space:" , nameWithWhiteSpaces);

let Stripping_name:String = nameWithWhiteSpaces.trim();
console.log("Stripping the name:" , Stripping_name);