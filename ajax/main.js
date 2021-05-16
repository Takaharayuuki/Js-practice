"use strinct";

const url = "https://dog.ceo/api/breeds/image/random";

const options = {
  method: "GET",
};

const fetchTest = fetch(url, options).then((response) => response.json());
// エラーが出る Promise{<pending>} 	pemding : 未決定
console.log(fetchTest); // 値が入っていないうちにlogを表示してもundefined

// サーバーからのデータの取得を待ってから処理をする
// Promise ,async/await
function getDogImage(url, options) {
  return fetch(url, options).then((response) => response.json());
}

async function getImage(url, options) {
  // getDogImageの処理が完了してresponseの中身が入ってからconsole.logをすることで値がundefinedにならない
  const response = await getDogImage(url, options);
  console.log(response.message);

  const imageElement = document.createElement("img");
  imageElement.src = response.message;
  document.body.appendChild(imageElement);
}

getImage(url, options);
