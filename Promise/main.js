"use strict";

// const err = new Error();
// err.message = "erorrrr";

// throw err;

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
function getMonthName(mo) {
  mo = mo - 1; // 配列の添字のために月の数を調整する (1 = Jan, 12 = Dec)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

try {
  var myMonth = 10; // 15 は範囲外であり、例外が発生する
  var monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  console.error(e.message, e.name); // エラーハンドラーに例外オブジェクトを渡す
}

// Promiseについて
function promiseTest(input) {
  return new Promise((resolve, reject) => {
    // reslveの場合の処理
    resolve(`${input}です`);
    // rejectの場合
    reject("NGです");
  });
}

console.log(promiseTest("テスト太郎"));

function buyService(pay, second) {
  return new Promise((ok, ng) => {
    setTimeout(() => {
      if (pay > 100) {
        let change = pay - 100;
        console.log(`${second}秒,お釣りは${pay}円です`);
        ok(change);
      }
      ng("お金が足りません");
    }, second * 1000);
  });
}
console.log("1");
console.log(buyService(300, 2));
console.log("3");

// buyService(180)
//   .then((change1) => {
//     console.log(change1);
//     return buyService(change1);
//   })
//   .then((change2) => {
//     console.log(change2);
//   })
//   .catch((e) => console.log(e));
