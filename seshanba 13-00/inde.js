

// const NumberFirst = (num) => {
//     return num[0] >6 ?false :true  
// }

// console.log(NumberFirst([1, 6, 1, 2, 3]));

// const Nmd = (s) => {
//      if ( s.length ==2 && s[0]==2 || s.at(-1)==3) {
//            return true
//      } 
//      else{
//         return false
//      }
// }

//  console.log(Nmd([4, 5]));

// const Test = (a) => {
//    return   8-a    
// }

//  console.log(Test([5]) );

// class Car {
//       constructor(num) {
//             this.num = num
//       }

//       NumberFin() {

//             let sum = ''
//             for (let i = 0; i < this.num.length; i++) {
//                   if (!+this.num[i]) {
//                         sum += this.num[i];
//                   }
//             }
//             console.log(sum);
//       }
// }

// let Newnumber = new Car('xasan12562365 abu 78236723')

// Newnumber.NumberFin()


// console.log( );



class Car {
      constructor(brand) {
            this.carname = brand;
      }
      present() {

            return 'I have a ' + this.carname;
      }
}
class Model extends Car {
      constructor(brand, mod) {
            super(brand);
            this.model = mod;
      }
      show() {
            return this.present() + ', it is a ' + this.model;
      }
}
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());