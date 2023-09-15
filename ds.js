'use strict'
// console.log("Testing");


// console.log(openingHours)

// const restaurant = {
//     name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //ES5 Object literals
//   openingHours,
// //   order: function(){
// //     return this.starterMenu
// //   },

//   getMenu(){
//     return [this.starterMenu,this.mainMenu]
//   },
//   order(starterIndex,mainIndex){
//     return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
//   },

// }

// console.log(restaurant)
// console.log(restaurant.getMenu())
// console.log(restaurant.order(2,1))

// function orderPizza(mainIngredient,...otherItems){
//     console.log(mainIngredient)
//     console.log(otherItems)

// }

// orderPizza("Chicken","Tomato","Onion","Bell Pepper")

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// //Array Destructuring
// const [a, b, ...others] = numbers;
// console.log(a, b, others);




// let {name:restName,categories} = restaurant
// console.log(restName)

// // ... spread operator

// const arr = [7, 8, 9];


// let newArr = [1,2,...arr]
// console.log(newArr)

// const newMenu = [...restaurant.starterMenu, 'Burger']
// console.log(newMenu)

// const copyArray = [...newMenu]
// console.log(copyArray)


// let myMenu = [...newMenu,...restaurant.starterMenu]



// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
//   };
  

// add(342,43234,234345,2342,234234,23423452,42342)


// ///////////////////////////////////////
// // The Nullish Coalescing Operator

// const totalGuest = 1;

// const newGuests = totalGuest || 10;
// console.log(newGuests)

// console.log(null || 'Jonas');
// console.log('' || 'Jonas');
// console.log(false || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);


// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1)

// // && - always outputs the first falsy value or else if all are truthy it will output the last truthy value
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && 2 && 'jonas');
// //Spread ... on the right side of the equation
// //Rest ... on the left side of the equation

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);



// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]:{
//         open:12,
//         close:22
//     },
//     [weekdays[4]]:{
//         open:11,
//         close:24
//     },
//     [weekdays[5]]:{
//         open:0,
//         close:24
//     }
// }

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//     openingHours
// };

// console.log(restaurant)

// const {thu:thursday, ...otherDays} = restaurant.openingHours

// console.log(thursday,otherDays);


// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun','mon', 'tue', 'wed']

// const weekDaysSet = new Set(days)

// console.log(weekDaysSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Risotto');

// //Maps

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try again!'],
// ]);

// console.log(question)
// console.log(question.get('question'));

// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }


const name = 'ChatGPT';

for (const char of name) {
    console.log(char);
}





const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (const num of uniqueNumbers) {
    console.log(num);
}



const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
    console.log(fruit);
}


const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}


// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const combined = Object.assign({}, obj1, obj2);

// const newObj = {...obj1,...obj2}
// console.log(newObj)


// const obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]


// const obj = { prop: 42 };
// Object.freeze(obj);
// obj.prop = 33;

// console.log(obj)


const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ['a', 'b', 'c']



let numArray = [4,2,52,42,34,12];

let newArray = numArray.map((el)=>{
    return el * 2
})

console.log(newArray)


const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

const userName = users.map((user)=>{
    return user.name
})

console.log(userName)