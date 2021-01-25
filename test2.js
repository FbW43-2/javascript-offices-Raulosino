

//Simple data structures
//Integers, float, character, booleans
// var number = 3;
// var flag = true;


//We want to print the letter "m" 
// var example = "Example";
// console.log(example[3]);


//Compound data structures
//Linear data structures:
//Arrays, Linked list, Stack, queue
// let arrayNames = ["Raul", "Abdullah"];
// let arrayNames2 = ["Heriberto", "Kinjal"];
// let arrayNames3 = ["Sara", "Sinclair"];
// let arrayAllNames = [arrayNames, arrayNames2, arrayNames3]
// console.log(arrayAllNames[2][0][0]);



// let arrayExample = ["Example", "Raul", "Florin"];
// console.log(arrayExample[0][3]);



//For loop you use when you know the amount of iterations you need to do.
//Total is the amount of kilometers I ran in x amount of days; we ran per day 2 km
// let total = 0;
// let days = 12;
// for (let i = 0; i < days; i++) {
//     total += 2;
// }
// console.log(total);


//While is used when you don't know the amount of iterations
// While is a if but looped
//If I want to run 36km, and I can only run 2km per day, how many days I must run.
// let total = 36;
// let perDay = 2;
// let daysRan = 0;

// while (0 < total) {
//     total -= perDay;
//     daysRan++;
// }
// console.log(daysRan);


//I want to save 123215684 and I can save per day 5,25;
//in how many days I can save the goal
// let total = 123215684;
// let savedPerDay = 10;
// let daysSaved = 0;

// while (0 < total) {
//     total -= savedPerDay;
//     daysSaved++;
// }
// console.log(daysSaved);



// non-linear data Structures
//Functions are a combination of non-linear and linear structures



var number = 6;
let string = "Raul";
let boolean = false;
let char;

//defining


//Invoking/call/cast
// printObject(string[3]);
// printObject(number);
// printObject(boolean)
// printObject(char);

//The parameter emptyVariable will take any value that you give in the 
// function printObject(emptyVariable) {
// console.log(emptyVariable);
// emptyVariable++;
// emptyVariable += "Add this to emptyVariable"
// emptyVariable = true;
// }

//This function adds 1 to the parameter provided
//Parameters have: a name and a value;
//The name is the one inside the definition of the function, the value that we pass when we invoke/call/cast the function.
// function addOne(string) {
//     if (typeof (string) != "number") {
//         throw new Error("The parameter provided is not a number");
//     }
//     string++;
//     console.log(string);
// }

// addOne(number);
// addOne(boolean);
