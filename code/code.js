// changes the color of the text
function userColor() {
  let userColor = document.getElementById("userColor").value;
  p1.style.color = userColor;
}
// changes the background color of the text
function userBgColor() {
  let userBgColor = document.getElementById("userBgColor").value;
  p1.style.backgroundColor = userBgColor;
}
// changes the size of the text
function userFont() {
  let userFont = document.getElementById("userFont").value;
  p1.style.fontSize = userFont + "px";
}
