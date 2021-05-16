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
function fetchDogImage(url, options) {
  return fetch(url, options)
    .then((response) => response.json())
    .catch((e) => console.log(e.message));
}

async function fetchImage(url, options) {
  // fetchDogImageの処理が完了してresponseの中身が入ってからconsole.logをすることで値がundefinedにならない
  const response = await fetchDogImage(url, options);
  console.log(response.message);

  const imageElement = document.createElement("img");
  imageElement.src = response.message;
  document.body.appendChild(imageElement);
}

fetchImage(url, options);
