const myName = [
  { name: "v", id: 1 },
  { name: "e", id: 2 },
  { name: "n", id: 3 },
];

function getName() {
  setTimeout(() => {
    let output = "";
    for (let i = 0; i < myName.length; i++) {
      output = myName[i].name;
      console.log(output);
    }
  }, 1000);
}

// function addName(x, callback) {
//   setTimeout(() => {
//     myName.push(x);
//     callback();
//   }, 2000);
// }
// addName({ name: "a", id: 4 }, getName);

const addName = (x) => {
  return new Promise((resolve, rejeect) => {
    setTimeout(() => {
      myName.push(x);
      let condition = true;
      switch (condition) {
        case true:
          resolve();
          break;
        case false:
          rejeect("error");
      }
    }, 2000);
  });
};

// addName({ name: "a", id: 4 })
//   .then(getName)
//   .catch((error) => console.log(error));

async function asyncFunc() {
  await addName({ name: "a", id: 4 });
  getName();
}
asyncFunc();
