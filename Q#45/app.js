//Q#45 : Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//Define a function to create a car object with optional option
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car with manufacturer and model
    var car = {
        maufacturer: manufacturer,
        model: model
    };
    //Add additional options tot he car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object
var my_car = create_car("Toyota", "Corolla", "color:Black", "sunroof: true");
//print the variable to ensure all information is stored in the car object correctly
console.log(my_car);
