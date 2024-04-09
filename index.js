
const header = document.createElement('h2');
header.classList.add('title');
header.textContent = '🤖BoredBot🤖';

const boredBotHeader = document.getElementById('title');
boredBotHeader.appendChild(header);

document.getElementById("get-activity").addEventListener('click', function (){
  fetch(" https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
  console.log(data);
  document.getElementById("activity").textContent = data.activity;
  // document.getElementById("title").textContent = " 🦾 BoredBot 🦿";
  // document.querySelector("main").classList.add("fun");
  });
});
