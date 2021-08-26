console.log("Hello");

const arr = [1, 6, 3, 4, 5];

(a = 0), (b = 1); // 1
(a = 1), (b = 2); // 2

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
console.log(
  arr.reduce((a, b) => {
    if (b > a) {
      a = b;
    }
    return a;
  }, 0)
);
