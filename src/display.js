var detail = document.getElementById("detail");
var container = document.querySelector("main");

function panel(event) {
  detail.style.width = "26%";

  container.style.marginRight = "26%";

  var picture = event.target.src;
  var info = event.target.previousElementSibling.innerText;

  document.getElementById("detailImage").src = picture;
  //document.getElementById("info").innerText = info;
  document.getElementById("info").innerText = info;
}

function exbutton() {
  detail.style.width = "0";
  container.style.marginRight = "0px";
}
