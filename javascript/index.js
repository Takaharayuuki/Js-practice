"use strict";

// const test = "テスト";

// console.log(typeof test);

// const apiData = [
//   {
//     carName: " トヨタ",
//     carUser: "佐藤太郎 ",
//   },
//   {
//     carName: " ホンダ",
//     carUser: "山田一郎",
//   },
//   {
//     carName: "  日産",
//     carUser: "田中次郎  ",
//   },
// ];
// const carNameList = [];
// const carUserList = [];

// apiData.forEach((el) => {
//   console.log(el);
//   carNameList.push(el.carName.trim());
//   console.log(carNameList);
//   carUserList.push(el.carUser.trim());

//   const userSei = el.carUser.substring(0, 2);
//   console.log(userSei);
//   if (userSei === "田中") {
//     alert("ユーザーは田中です!!");
//   }
//   userSei.replace("田中", "元田中");
//   if (userSei !== "田中") {
//     alert("元田中です");
//   }
//   //? replace と正規表現でv-ifに渡すデータをだし分けてテーブルを変更できるかも
// });

// Map
const myMap = new Map();

myMap.set("id", 3);
myMap.set("name", "本田");

console.log(myMap);
const valueList = myMap.values();
console.log("valueList: ", valueList);

// for (value of valueList) {
//   console.log(value);
// }

const test = {
  test1: 10,
  test2: 20,
  test3: 30,
};

Object.keys(test).forEach((element) => {
  console.log(element, test[element]);
});

//郵便番号テスト

const postal = {
  postalCode: "000-0000",

  checkPostalCode() {
    const replaced = this.postalCode.replace("-", "");
    const length = replaced.length;

    if (length === 7) {
      return true;
    }
    return false;
  },
};

console.log(postal.checkPostalCode());

const person = {
  name: "本田",
  age: 30,

  getName() {
    console.log(this.name);
    return this;
  },

  getAge() {
    console.log(this.age);
    return this;
  },
};

person.getAge().getName();
