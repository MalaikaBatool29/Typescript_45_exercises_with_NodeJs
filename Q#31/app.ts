//Q#31: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

let user_names:string[] = ["Admin", "Eric","Malaika","Maria","Marium"];

if(user_names.length === 0) {
    console.log('We need to find some users!');
    
} else {
    user_names = []
    console.log('We have removed all the usernames ' +user_names);
    
}
