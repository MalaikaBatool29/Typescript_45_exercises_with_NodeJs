//Q#12: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Sana", "Hira", "Maham", "Javeria"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hi ".concat(name_1, "! Would to like to visit water park in summer holidays?"));
}
