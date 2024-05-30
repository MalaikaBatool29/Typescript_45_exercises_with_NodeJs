//Q#45 : Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//Define a function to create a car object with optional option

function create_car(manufacturer, model, ...options) {
  //Initialize a car with manufacturer and model
let car = {
  maufacturer: manufacturer,
  model:model
};

//Add additional options tot he car object
options.forEach(option => {
  let [key, value] = option.split(":");
  car[key.trim()] = value.trim();
});
return car;

}

//Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "color:Black", "sunroof: true")

//print the variable to ensure all information is stored in the car object correctly

console.log(my_car);

