const users = [
  { name: "Venkatesh", last: "Prasad", age: 23 },
  { name: "Elon", last: "Musk", age: 25 },
  { name: "Jeff", last: "Bezoz", age: 27 },
];
// console.log(users.map((data) => data.name + " " + data.last));
// console.log(users.filter((data) => data.age === 23).map((data) => data.age));
const ok = users.filter((data) => {
  return data.age < 26;
});
console.log(ok.map((data) => data.name));
