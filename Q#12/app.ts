//Q#12: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names:string[] = ["Sana", "Hira","Maham","Javeria"];

for (const name of names) {
    console.log(`Hi ${name}! Would to like to visit water park in summer holidays?`);
    
}