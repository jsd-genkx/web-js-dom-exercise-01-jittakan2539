function changeHead() {
  let element1 = document.querySelector("#myHeading");
  element1.innerText = "JS DOM Hello World!";
}

function resetCode() {
  window.location.reload();
}


function changeContent() {
  const contentEl = document.querySelector("#content");
  contentEl.style.fontSize = "3rem";
  contentEl.style.fontWeight = "bold";
  contentEl.style.color = "red";
}

document.querySelector("#changeHead-btn").addEventListener("click", changeHead);

document.querySelector("#changeHead-btn").addEventListener("click", changeContent);

document.querySelector("#reset").addEventListener("click", resetCode);



