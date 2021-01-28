var detail = document.getElementById("detail");
var container = document.querySelector("main");
//var bigpicture = document.getElementById("detailImage").src;

function panel(event) {
  detail.style.display = "block";
  console.log("block");

  container.style.marginRight = "30%";

  var picture = event.target.src;
  console.log(picture);

  document.getElementById("detailImage").src = picture;
}

function exbutton() {
  detail.style.display = "none";
  console.log("none");
  container.style.marginRight = "0px";
}

console.log(container.style.marginRight);
