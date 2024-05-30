//Q#16: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const groupMembers:string[] = ["Hania", "Hadia", "Hafsa"];

// Inform everyone about the bigger table

console.log("Great news! I found a bigger dinner table, so there's more space available");
 
//Add a new guest at the beginning

groupMembers.unshift("Fatima");

//Add new guest to the middle of an array

//To find a target index
let i = Math.floor(groupMembers.length/2);

groupMembers.splice(i,0,"Hamna");

//Add a new guest to the end of an array

groupMembers.push("Kainat");

//Print a new set of invitation messages, one for each person in your list.

for(const group of groupMembers) {
console.log(`Hi ${group}! we are pleased to invite you for a dinner at my place`);

}
