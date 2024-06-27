
// setTimeout(() => {
//       console.log('salom sunyo');
// },1000*6)

// let set= setTimeout(() => {
//     console.log('salom dunyo');
// },3000)

// let set= setInterval(() => {
//   console.log('malumot bormi  ? ');
// },1100)


// if (10>5) {
//      clearInterval(set)
// }


// console.log('loading---1 ');
// setTimeout(() => {
//     console.log('salom12');
// }, 0)
// setTimeout(() => {
//     console.log('salom1');
// }, 600)
// console.log('salom');

// setTimeout(() => {
//     console.log('salom100');
// }, 1)


// function set(call) {
//     setTimeout(() => {
//         console.log(`salom ${call()}`);
//     }, 1000)
// }

// function Next(A) {
//   return A
// }


// set(() => Next('iSOMIDDIN'));

// let token = {
//   name: 'isomiddin',
//   age: 15,
//   hobee: 'coder'
// }

// res =  JSON.stringify(token)


// localStorage.setItem('user1', res)
// localStorage.setItem('user2', res)
// localStorage.setItem('user3', res)

//  let is =localStorage.getItem('user')

//   resalt = JSON.parse(is)
//  console.log(resalt);

//  localStorage.removeItem('user1')
// localStorage.clear()


// let re= setTimeout(() => {
//   console.log('salom1');
// },0)
// console.log('salom');

// let res= setInterval(() => {
//    console.log('malumot bormi ? ');
// },1000)



function Parent(chilid) {
   setTimeout(() => {
   console.log(`hey Bro ${chilid()}`);
   },1000)
}
function Chilid(a) {
    return a
}

Parent(  () => Chilid('hello') )