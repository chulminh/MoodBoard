var detail = document.getElementById("detail");
var container = document.querySelector("main");

function panel(event) {
  detail.style.width = "30%";

  container.style.marginRight = "30%";

  var picture = event.target.src;

  document.getElementById("detailImage").src = picture;
}

function exbutton() {
  detail.style.width = "0";
  container.style.marginRight = "0px";
}
