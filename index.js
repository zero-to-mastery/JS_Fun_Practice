array = [1, 2, 3];
if (array) {
  for (array = array.length; array <= 10; array++) {
    console.log(array);
  }
}

op = [1, 2, 3];
num = " over here!";
if ((op === 1, 2, 3)) {
  for (op = 0; op <= 100; op++) {
    console.log(op + num);
  }
}

// array methods

const newArray = [1, 2, 3, 4];

const mutatedArray = newArray.map((num) => num * 2);

console.log(mutatedArray);
