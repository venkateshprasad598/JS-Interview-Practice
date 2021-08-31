places = [
  { name: "Paris", id: 1 },
  { name: "London", id: 2 },
  { name: "Barcelona", id: 3 },
];

function getName() {
  setTimeout(() => {
    let output = "";
    places.map((data) => {
      output = data.name;
      console.log(output);
    });
  }, 1000);
}

// function addName(add, callback) {
//   setTimeout(() => {
//     places.push(add);
//     callback();
//   }, 2000);
// }
// addName({ name: "Italy", id: 4 }, getName);

function addName(add) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      places.push(add);
      let condition = true;
      if (condition) {
        resolve();
      } else {
        reject(console.log("Error"));
      }
    }, 2000);
  });
}
// addName({ name: "Italy", id: 4 })
//   .then(() => {
//     getName();
//   })
//   .catch((error) => {
//     return error;
//   });
async function asyncFunc() {
  await addName({ name: "Italy", id: 4 });
  getName();
}

asyncFunc();
