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

function promiseTest(input) {
  return new Promise((resolve, reject) => {
    // reslveの場合の処理
    resolve(`${input}です`);
    // rejectの場合
    reject("NGです");
  });
}

console.log(promiseTest("テスト太郎"));
