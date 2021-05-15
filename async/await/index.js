"use strict";

// 戻り値 Promise
async function aTest1() {
  return "非同期関数";
}

// console.log(aTest1().then((value) => console.log(value)));

function waiting(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("okです"));
    }, 1000 * seconds);
  });
}

async function aTest2() {
  console.log(1);
  await waiting(2);
  console.log(3);
  await waiting(3);
  console.log(5);
}

aTest2();
