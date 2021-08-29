// DSA ********************************************************************
//Largest Among Two
function max(a, b, c) {
  // var max = Math.max(a, b);
  // console.log(max);
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  }
}
max(10, 10, 10);

//CONDITONALS
var hour = 9;
var message = "";
if (hour > 6 && hour < 12) {
  console.log((message = "good morning"));
} else if (hour >= 12 && hour <= 18) {
  console.log((message = "good evening"));
} else {
  console.log((message = "good night"));
}

// SWAP TWO VARIABLES
function swap(a, b) {
  var temp = a;
  var a = b;
  var b = temp;
  return [a, b];
}
console.log(swap(2, 4));

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
