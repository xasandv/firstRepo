
// const start1  =(a,b) => { 
//    fil1=    a.filter((val) => val==1)
//    fil2=    b.filter((val) => val==1)
//   resalt = fil1+fil2
//    return resalt.length
// } 

// console.log(start1([1, 2], []));


// const arrey =['xasan',22,'coder']
// console.log(arrey[0]);
// let name = 'xasan'
// let obj = {
//     name: 'Muhammad ',
//     age: 22,
//     hobbe: 'coding',
//     fun: function () {
//         console.log(this.name, 'this');
//     }
// }
// obj.fun()
// sum = { ...obj }
// obj = null
// console.log(obj.name);


// let res ='hobbe'
// console.log(obj[res]);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// const obj2 = {name:'zsdas'}


class Car  {
    constructor (names,color,age) {
   this.names =names
    }
  Bwm(){
    let date =new Date()
    console.log(`${this.names} ${this.color}  ${date.getFullYear() - this.age} yosh`);
  } 
  ToUpperCase(){
    let date =new Date()
    console.log(`${this.names} ${this.color}  ${date.getFullYear() - this.age} yosh`);
  } 
}

let CarFun = new Car ('Bwm asfasas2345678dasSh jhsahjsajg' )
let CarFun = new Car ([23523,345324,34523,34534] )

CarFun.Bwm()


function Cards(name,color,age) {
     let date  =new Date ()
      console.log(`${name } ${color} ${date.getFullYear() -age}yosh  fun `);
}

Cards('Bwm banan' ,'black' ,2010)