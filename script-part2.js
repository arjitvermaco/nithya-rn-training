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