//見出しh2をheadingに代入する
const heading = document.querySelector("h2");
//headingのテキストをheadingTextに代入する
const headingText = heading.textContent;
//buttonを作りbuttonにテキストを追加しbodyの中に追加する
const button = document.createElement('button');
button.textContent = "Push Me";
document.body.appendChild(button)

//fetch API
const UserId = "Takaharayuuki";
fetch(`https://api.github.com/users/${encodeURIComponent(UserId)}`)
.then(response => {
  console.log(response.status);
})