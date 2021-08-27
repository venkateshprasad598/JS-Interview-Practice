class Person {
  constructor(first, last) {
    (this.first = first), (this.last = last);
  }

  static myName() {
    return console.log("Hello");
  }
  hello() {
    return "Hello";
  }
}

let me = new Person();
console.log(me);

class newPerson extends Person {
  constructor(first, last, age, num) {
    super(first, last);
    (this.age = age), (this.num = num);
  }
}
const newme = new newPerson("Venku", "Prasad", 23, 8);
console.log(newme.hello());
