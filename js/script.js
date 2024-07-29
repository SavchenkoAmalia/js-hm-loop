//! 1

// let i = 1;

// while (i <= 10) {
//   console.log(` ${i}`);
//   i++;
// }

//! 2

// let maxNumber = 20;

// for (i = 0; i <= maxNumber; i++) {
//   if (i % 2 === 0) {
//     console.log("число є парним", i);
//   }
//   if (i % 2 !== 0) {
//     continue;
//   }
// }

//! 3

// for(i = 0; i <= 10; i++ ){
//     console.log(`7 * ${i} = ${7 * i}`);
// }

//! 4

// let numbers = [1, 2, 3, 4, 5];
// let i = 0;

// while (i <= numbers.length) {
//   console.log(i);
//   i++;
// }

//! 5

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i = 0; i <= numbers.length; i++ ){
//     if(i === 7){
//         break;
//     }
//     console.log(i);
// }

//! 6

// let n = 34;

// for(i = 0; ; i++ ){
//     if(i >=  n){
//         break;
//     }
//     console.log(i);
// }

//! 7

let i = 1;

while (i <= 20) {
    if(i % 3 === 0){
        i++;
        continue;
    }
  console.log(` ${i}`);
  i++;
}