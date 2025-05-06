// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log("5 is best number ");
  }
  // console.log(element);
}

for (let i = 0; i < 10; i++) {
  // console.log(`Outer loop : ${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`Inner Loop : ${j} in Outer Loop ${i}`)
  }
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(` ${i} * ${j} = ${i*j}`);
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
  // in js when we fetch indext out of size it gives , undefined instead of arrayindex of bound
}

// break and continue

for (let i = 1; i < 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(i);
}
