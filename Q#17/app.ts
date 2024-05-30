//Q#17: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

const groups:string[] = ["Fatima","Hania","Hamna", "Hadia", "Hafsa","Kainat"];

//Print a message saying you can only invite two people

console.log("Unfortunately, my new dinner table won't arrive on time. I can only invite two people for dinner.");

//Remove guests until only two remain

let maxGuest = 2;

if (groups.length>maxGuest) {
    let numToRemove = groups.length - maxGuest

    for(let i = 0; i<numToRemove; i++) {
        let removedGuests = groups.pop();
        console.log(`I'm so sorry ${removedGuests}, but I can't invite you to dinner anymore due to space limitations.`);
        
    }
    }

//Message to remaining people and letting them know they r still invited

for(let group of groups) {
   console.log(`Miss ${group}! You are still invited.`);
    }
//Removed last two names
groups.splice(0,2);
console.log(groups);


