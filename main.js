// DSA ********************************************************************
function mySwitch(n) {
  switch (n) {
    case 1:
      console.log("monday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("wednesday");
      break;
    case 4:
      console.log("thurday");
      break;
    case 5:
      console.log("friday");
      break;
    case 6:
      console.log("saturday");
      break;
    case 6:
      console.log("sunday");
      break;
    default:
      console.log("invalid");
  }
}
mySwitch(8);

// function myFunc(a, b, c) {
//   var answer =
//     a >= b && a >= c
//       ? console.log(a)
//       : b > a && b > c
//       ? console.log(b)
//       : c > a && c > b
//       ? console.log(c)
//       : null;
//   return answer;
//   // var answer = marks >= 40 ? "PASS" : "FAIL";
//   // return answer;
// }
// console.log(myFunc(221, 3, 19));

// function distance(distance) {
//   if (distance >= 0 && distance <= 100) {
//     console.log(5);
//   } else if (distance > 100 && distance <= 500) {
//     console.log(8);
//   } else if (distance > 500 && distance < 1000) {
//     console.log(10);
//   } else {
//     console.log(12);
//   }
// }
// console.log(distance(554));

//Largest Among Two
// function max(a, b, c) {
//   // var max = Math.max(a, b);
//   // console.log(max);
//   if (a >= b && a >= c) {
//     console.log(a);
//   } else if (b > a && b > c) {
//     console.log(b);
//   } else if (c > a && c > b) {
//     console.log(c);
//   }
// }
// max(10, 10, 10);

//CONDITONALS
// var hour = 9;
// var message = "";
// if (hour > 6 && hour < 12) {
//   console.log((message = "good morning"));
// } else if (hour >= 12 && hour <= 18) {
//   console.log((message = "good evening"));
// } else {
//   console.log((message = "good night"));
// }

// SWAP TWO VARIABLES
// function swap(a, b) {
//   var temp = a;
//   var a = b;
//   var b = temp;
//   return [a, b];
// }
// console.log(swap(2, 4));

// DSA ********************************************************************

// class Person {
//   constructor(first, last) {
//     (this.first = first), (this.last = last);
//   }

//   static myName() {
//     return console.log("Hello");
//   }
//   hello() {
//     return "Hello";
//   }
// }

// let me = new Person();
// console.log(me);

// class newPerson extends Person {
//   constructor(first, last, age, num) {
//     super(first, last);
//     (this.age = age), (this.num = num);
//   }
// }
// const newme = new newPerson("Venku", "Prasad", 23, 8);
// console.log(newme.hello());
