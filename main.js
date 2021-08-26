console.log("Hello");

const arr = [1, 2, 3, 4, 5];

// function double(x) {
//   return x * 2;
// }
const ok = arr.map((x) => {
  return x * 2;
});
// .filter((x) => {
//   return x > 5;
// });
const bye = ok.filter((x) => x > 6);
console.log(bye.reduce((a, b) => a + b, 0));
