//Q#29: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
var city_country = function (city, country) {
    return "".concat(city, ", ").concat(country);
};
//Test the functions with three city_country pair
console.log(city_country("NewYork", "USA"));
console.log(city_country("Jaddah", "Saudi Arabia"));
console.log(city_country("Colombo", "Srilanka"));
