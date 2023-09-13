'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense= true;

// // const interface = "audio";
// // const private = 534;

// Functions
// function logger(){
//     console.log("hey ! My name is arjit.")
// }
// //Invoking or calling 
// logger()
// logger()
// logger()
// logger()
// logger()

// function doubleTheNumber(num){
//     console.log(num*2);
// }

// doubleTheNumber(2);
// doubleTheNumber(100);

// function addTwoNumbers(num1,num2){
//     return num1+num2;
// }

// let sum1 = addTwoNumbers(10,50);
// let sum2 = addTwoNumbers(50,78976);

// console.log(sum1,sum2)

// console.log(`Sum of 10 and 50 is ${addTwoNumbers(10,50)}`)


//Function declaration vs function expressions
// const age1 = calAge1(1991)
// function calAge1(birthYear){
//     return 2023 - birthYear
// }


// console.log(age1)

// //Function expression
// const calAge2 = function(birthYear){
//     return 2023 - birthYear
// }
// const age2 = calAge2(1998)
// console.log(age1,age2)

// //Arrow Function
// const calAge3 = (birthYear)=>{
//     return 2023-birthYear
// }

// const calAge4 = () => 2023-1991


// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
//   }

// console.log(yearsUntilRetirement(1991,"Arjit"))
  //Functions calling other functions

//   function cutFruitPieces(fruit){
//     return fruit*4
//   }

//   function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const oragnePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${oragnePieces} pieces of orange`

//     return juice;
//   }

//   console.log(fruitProcessor(2,3))

// ARRAYS - 

// const myStudents = ["Ravi","Abhishek","John","Ritik"]

// console.log(myStudents)

// let myFriends = new Array("Aditya","Shivver","Akash","Nitin")

// console.log(myFriends)

// console.log(myFriends[0])
// console.log(myFriends[2])

// console.log(myFriends.length)
// console.log(myFriends.length-1)

// myFriends[2] = "Ketan";
// console.log(myFriends)

// myFriends = ['asf','asdf',
// 'asdf'];

// console.log(myFriends)

//Array Methods or Operations

// const friends = ['Michael', 'Steven', 'Peter'];
// // push  - to add to end of an array

// const newLength = friends.push("Mark")
// console.log(newLength)
// console.log(friends)

// //Unshift - to add element to beginning of an array

// friends.unshift("John")
// console.log(friends.unshift("John"))
// console.log(friends)

// //Remove Elements
// friends.pop() //Last element will be removed
// console.log(friends.pop())
// console.log(friends)

// friends.shift()//Remove the first element
// // and return the element removed 

// console.log(friends.indexOf('John')) // Returns the index of first instance of the element

// console.log(friends.includes('Michael'))
// console.log(friends.includes('Ankit'))

// const aboutMe = [
//     "arjit",
//     "verma",
//     "Lucknow",
//     1991,
//     723395995,
//     ["html","css","js"],
//     true
// ]
// // console.log(aboutMe)
// const aboutMeObj = {
//     firstName : "Arjit",
//     lastName : "Verma",
//     location: "Lucknow",
//     birthYear : 1991,
//     phoneNo : 7233959595,
//     skills:["html","css","js"]
// }
// console.log(aboutMeObj)
// console.log(aboutMeObj.skills.length)
// //DOT Notation
// console.log(aboutMeObj.firstName)
// console.log(aboutMeObj.birthYear)
// //Brackets Notation
// console.log(aboutMeObj['lastName'])

// const key = "Name";
// console.log(aboutMeObj['last'+key])
// console.log(aboutMeObj['first'+key])

// console.log(aboutMeObj.'first'+key)
// const interestedIn = prompt("Tell us what do you want to know about Arjit?")




// if(aboutMeObj[interestedIn]){
//     console.log(aboutMeObj[interestedIn])
// }else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and skills');
// }


// aboutMeObj.twitter = "arjitverma"
// aboutMeObj['linkedIn']="arjitverma"
// console.log(aboutMeObj)


// const arjit = {
//     firstName : 'Arjit',
//     lastName : 'Verma',
//     birthYear : 1991,
//     location:"Lucknow",
//     job: 'Trainer',
//     skills : ['html','css','js','react','nodejs'],
//     hasDriversLicense : true,
//     calcAge : function(){
//         console.log(this)
//         return 2023 - this.birthYear
//     },
//     getSummary :function(){
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job} from ${this.location}`
//     }
// }



// console.log(arjit.calcAge())

// console.log(arjit.getSummary())

// Iterations - Loops 

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let myFriends = new Array("Aditya","Shivver","Akash","Nitin")

// for(let i = 0;i < myFriends.length;i++){
//     console.log(myFriends[i])
// }

// for(let i = myFriends.length-1;i>=0;i--){
//     console.log(myFriends[i])
//     if(myFriends[i] === "Akash") break;
// }


// for(let i = myFriends.length-1;i>=0;i--){
   
//     if(myFriends[i] === "Akash") continue;
//     console.log(myFriends[i])
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/



///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/


// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/