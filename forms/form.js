"use strict";

const form = document.getElementById("js-form");
console.log(form);
const preview = document.getElementById("js-preview");

// 画像ファイルを読み込んで、base64形式でpreviewのimgタグのsrcに吐き出す
form.imageFile.addEventListener("change", (e) => {
  console.log(e.target.files);
  const uploadFile = e.target.files[[0]];

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    reader.result;
    console.log(reader.result);
    preview.src = reader.result;
  });
  reader.readAsDataURL(uploadFile);
});
// * FileReader base64について
// * 参考URL https://developer.mozilla.org/ja/docs/Web/API/FileReader/readAsDataURL
// * ドラッグ&ドロップ形式
// * https://qiita.com/zaru/items/8c0ab5c70775644d4d41
