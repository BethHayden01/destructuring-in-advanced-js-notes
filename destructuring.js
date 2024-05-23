/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);
//Here we have created a simple ages array and assined john the first age in the array, 30, mary and joe have been assigned ages 26 and 27 respectivley.
//This method does not use detructuring and requires that we declare each variable individually on a separate line and refernce the index of the item in the array
//we want to assign to each variable.
//If we comment out the three variables and instead define an array of variable names, through destructuring assignment ES6 automatically assigns the values in the array to 
// the name variables in order, as shown above.

//The same works for objects as shown below. we will define an object called jobs with 3 properties.

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
//to destructure this object we can simly use the property names
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

//It is possible to destructure only a subset of an object as shown below.
// Destructuring subsets
let languages = ["english", "german", "french", "spanish", "japanese"];
let [johnnative, johnsecondary] = languages;
//here we are assinging john to know 2 languages, 2 variables, out of the 5. Here the first 2 values are assigned to the two variables and the rest ignored, as shown below.
console.log(johnnative, johnsecondary);
//you can skip values in the array using commas in place of the values you wish to skip, for example:
let [, ,marynative, marysecondary] = languages;
console.log(marynative, marysecondary);
//this skips the first two values and displays french and spanish as marys known languages.

//when working with objects, destructuring subsets is even easier. we will create a new object called languages 2.
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "german",
    thirdLanguage: "french",
    fourthLanguage: "spanish",
};
//because the values in the object are represnted by their own property names, you can destruct only the things you need using their property names as shown below:
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "banana", "peach", "orange", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
//here we have assigned the variable fruits an array of fruit names. 
//we have then assigned the first two items in the array to two variables called favourite and secondfavourite and used the rest parameter syntax on the others.
//if we log this now we can see the first two fruits are listed under favourite and second and the leftover variables listed under others.
console.log(favourite);
console.log(secondFavourite);
console.log(others);
//similarly if we create an object of people
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sue: "veggie",
    andrea: "steak",
};
//we can destructure the people as we did with the fruits as shown below:

let {brian, anna, ...rest} = favouriteFoods; 
console.log(brian);
console.log(anna);
console.log(rest); 

//the rest parameter syntax has been used to bundle the remaining parts of the array that might be used later on.