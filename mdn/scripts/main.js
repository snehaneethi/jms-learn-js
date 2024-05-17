const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/snehaneethi.png") {
    myImage.setAttribute("src", "images/snehaneethi2.png");
  } else {
    myImage.setAttribute("src", "images/snehaneethi.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome Back, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
