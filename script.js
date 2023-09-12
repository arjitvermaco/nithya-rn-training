// //Console
// console.log("Hello From Console 😄");
// console.log("23+45+50")

// //Variables
// // let , var and const

// let firstName  = "Arjit";

// console.log(firstName)

// firstName = "Nitin";
// console.log(firstName)

// //Variable Name conventions

// let arjit_verma = "AV";
// let $function = "something";

// // Only special characters allowed are $ and _

// const PI = 3.14;
// let myName = "Arjit Verma";
// let myFirstJob = "Developer";
// let myCurrentJob = "Trainer"

// //Data Types - 7 primitive data types
// //Strings
// let js = "Javascript is awesome!!!"
// let city = "Lucknow";
// let myCountry = "India";

// console.log(typeof js)
// console.log(typeof city)

// //Numbers
// let myAge = 31;
// console.log(myAge)
// console.log(typeof myAge)

// //Boolean - true or false
// let hasDriversLicense = true;
// let isAllowedToVote = false;

// console.log(typeof hasDriversLicense)

// //Undefined
// let myCar;
// console.log(myCar);
// console.log(typeof myCar);

// //Null
// let myFavNumber = null;
// console.log(myFavNumber)
// console.log(typeof myFavNumber)

// BIGINT
//SYMBOLS

// let , var and const

// const myPhoneNumber ="374892374923";

// console.log(firstName)
// var firstName = "Arjit";
// console.log(firstName)
// //Var allows reinitiliazation
// var firstName = "Aman";
// console.log(firstName)

// let lastName = "Verma"

// let lastName = "Singh"

//Basic Math Operators
// const currentYear = 2023;
// const arjitAge = currentYear - 1991;
// const amanAge = currentYear - 1999;

// console.log(arjitAge);
// console.log(amanAge);

// console.log(arjitAge * 2);
// console.log(arjitAge / 2);
// console.log(2 ** 3); // 2 to the power of 3

// let firstName = "Arjit";
// let lastName = "Verma";
// console.log(firstName + " " + lastName);

// //Assigment Operators
// let x = 10 + 5;
// console.log(x)

// x +=10; // x = x+10
// console.log(x)

// x *= 4; // x = x*4;

// x++// x = x+1;

// console.log(x)
// //Comparison Operators

// console.log(x > 100)
// console.log(x < 100)

// const age = 18;
// // > , < , >= , <= ,!=

// const isAllowedToDriver = age >= 18;
// console.log(isAllowedToDriver)

// String and Template Literals
// let firstName = "Arjit";
// let lastName = "Verma";
// let age = 1991;
// let job = "Trainer";

// // 'My name is Arjit Verma and I am a 32 years old trainer'
// console.log("My Name is " + firstName + " " + lastName + " and I am " + age + " years old "+ job);

// let aboutMe = `My Name is ${firstName} ${lastName} and I am ${2023 - age} years old ${job}`

// console.log(aboutMe)

// console.log("Hey I am string \n dsfjalsd")

// console.log(`Hey I am a string
// and this is new line
// another line`)
/////////////////////////
// Decision Making (If Else )
// let age = 15;

// if(age>=18){
//     console.log("You are allowed to drive 🚗")
// }else{
//     console.log(`Sorry you cannot drive yet!! Please wait ${18 - age} more years`)
// }

// Type Conversion and type coercion
//Type Conversion 
// let birthYear = '1991';
// let age = 2023 - birthYear
// // let age = 2023- Number(birthYear)
// console.log(age)
// console.log(Number("Arjit"))
// console.log(typeof Number("Arjit"))
// console.log(typeof NaN)
// console.log(String(23))
// console.log(typeof String(23))

// //Type Coercion
// console.log("I am " + 32 + " Years old")
// console.log('23'- '10'-3);
// console.log("23"+'15')
// console.log('24'/'2')


// let n = '1'+1; // 11 Num => String 
// n = n-1; //10 Sting = > Number
// console.log(n)
// console.log(typeof n )

// Truthy and Falsy Values
// 5 falsy values - 0 , '', undefined,null , NaN

// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// // console.log(Boolean(0))
// console.log(Boolean('Arjit'))
// console.log(Boolean(1))
// console.log(Boolean({}))

// let moneyInBank = 00;
// if(moneyInBank){
//     console.log("Dont spent it all")
// }else{
//     console.log("You should get a job")
// }

// let height = 2;

// if(height){
//     console.log("YAY! height is defined")
// }else{
//     console.log("Height is not defined!!!")
// }

// Equality Operators : == vs ===
// const age = '18';
// if(age === 18) console.log('You just became an adult :D (strict)')

// if(age == 18) console.log('You just became an adult :D (loose)')

// let userAge = Number(prompt("What is your age??"));
// console.log(userAge)
// console.log(typeof userAge)

const day = 'saturday';
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
  } else if (day === 'tuesday') {
    console.log('Prepare theory videos');
  } else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
  } else if (day === 'friday') {
    console.log('Record videos');
  } else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
  } else {
    console.log('Not a valid day!');
  }

switch (day) {
    case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('Prepare theory videos');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;
    case 'friday':
      console.log('Record videos');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :D');
      break;
    default:
      console.log('Not a valid day!');
}
  
////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/ 

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
