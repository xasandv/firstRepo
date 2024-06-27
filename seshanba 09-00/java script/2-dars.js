

// console.log(Math.pow(4,3));
// console.log(Math.sqrt(16));
// console.log(Math.round(10.5));
// console.log(Math.abs(-10));
// console.log(Math.ceil(10.9));
// console.log(Math.floor(10.8));
// let min = [12,2,34,43,456,45,4]
// console.log(Math.min(...min));
// console.log(Math.max(...min));
// let ran =Math.random()*10
// console.log(Math.round(ran));

// console.log(100== '100');

// console.log(10<5);

// console.log(10 <5 && 'salom');



// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// 2.

// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.
// Example #1
// // The first object parameter.

// {
//   name: "Benny",
//   phone: "3325558745",
//   email: "benny@edabit.com"
// }

// // The second object parameter.

// {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com"
// }


// ➞ false

// 3.
// Funksiya yarating
// Funksiya obyektlarni arrayda qabul qilsin. Va ikkinchi parameter uchun son qabul qiladi.
// Obyekt ichidagi inson yoshlarini parameterga berganimizda ushanchaga qushib quysin.


// agePerson([ {bill:24}, {Mr:25}], 3) // [ {bill:27}, {Mr:28}]

// const toArray = (a, b) => {
//     return a.name == b.name
// }


// // // The second object parameter.



// console.log(toArray({
//     name: "Benny",
//     phone: "3325558745",
//     email: "benny@edabit.com"
// },
//     {
//         name: "Jason",
//         phone: "9853759720",
//         email: "jason@edabit.com"
//     }
// ));



const agePerson = (a,b) => {
         return a.map((val) => {
            let res = Object.values(val)
          return +res +b 
        })
}

console.log(agePerson([ {bill:24}, {Mr:25}], 3)  );