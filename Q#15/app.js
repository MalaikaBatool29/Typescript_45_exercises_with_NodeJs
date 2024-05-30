//Q#15: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var groups = ["Hania", "Hadia", "Hafsa"];
// Print a message stating the name of the guest who can't make it
console.log("".concat(groups[1], ", You cannot make it to the dinner party!"));
// Replace the name of the guest who can't make it with the name of the new person you are inviting
groups.splice(1, 1, "Amna");
console.log(groups);
// Print a second set of invitation messages, one for each person who is still in your list.
for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
    var group = groups_1[_i];
    console.log("Hi ".concat(group, "! You are cordially invited for a dinner at my place"));
}
