//Q#27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//VERSION 1: Alien color is green
var alien_Color = 'green';
if (alien_Color === 'green') {
    console.log('The player earned 5 points');
}
else if (alien_Color === 'yellow') {
    console.log('The player earned 10 points');
}
else {
    console.log('The player earned 15 points');
}
//VERSION 2: Alien color is yellow
var alienColor = 'yellow';
if (alienColor === 'green') {
    console.log('The player earned 5 points');
}
else if (alienColor === 'yellow') {
    console.log('The player earned 10 points');
}
else {
    console.log('The player earned 15 points');
}
//VERSION 3: Alien color is red
var alienColors = 'red';
if (alienColor === 'green') {
    console.log('The player earned 5 points');
}
else if (alienColors === 'yellow') {
    console.log('The player earned 10 points');
}
else {
    console.log('The player earned 15 points');
}
