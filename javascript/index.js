"use strict";

const test = "テスト";

console.log(typeof test);

const apiData = [
  {
    carName: " トヨタ",
    carUser: "佐藤太郎 ",
  },
  {
    carName: " ホンダ",
    carUser: "山田一郎",
  },
  {
    carName: "  日産",
    carUser: "田中次郎  ",
  },
];
const carNameList = [];
const carUserList = [];

apiData.forEach((el) => {
  console.log(el);
  carNameList.push(el.carName.trim());
  console.log(carNameList);
  carUserList.push(el.carUser.trim());

  const userSei = el.carUser.substring(0, 2);
  console.log(userSei);
  if (userSei === "田中") {
    alert("ユーザーは田中です!!");
  }
  userSei.replace("田中", "元田中");
  if (userSei !== "田中") {
    alert("元田中です");
  }
  //? replace と正規表現でv-ifに渡すデータをだし分けてテーブルを変更できるかも
});
