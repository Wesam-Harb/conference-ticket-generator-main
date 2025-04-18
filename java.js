let fileLabel = document.querySelector("form label[for=f]");
icon = document.createElement("i");
let removeBtn = document.querySelector(".remove");
let changeBtn = document.querySelector(".change");
let cloneP = document.querySelector("form p:nth-of-type(2)").cloneNode();
let span = document.createElement("span");
let gitName = document.querySelector(".git");
let ticket = document.querySelector(".ticket");
let emailInput = document.querySelector("input[type=text]:nth-of-type(3)");
let nameInput = document.querySelector("input[type=text]:nth-of-type(2)");
let fileInput = document.querySelector("form input[type=file]");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let gitInput = document.querySelector("form input:last-of-type");
let buttons = document.querySelector(".btn");
let avatar = document.querySelector(".avatar");

fileLabel.addEventListener("dragover", (e) => e.preventDefault());
fileLabel.addEventListener("drop", function (e) {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
});

icon.classList.add("fas");
icon.classList.add("fa-solid");
icon.classList.add("fa-circle-info");
cloneP.append(icon, " Please enter a valid email address");

emailInput.after(cloneP);
cloneP.style.color = "hsl(7, 71%, 60%)";
cloneP.style.display = "none";

let valid = true;
document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  if (fileInput.files.length === 0 || fileInput.files[0].size > 500000) {
    valid = false;
    e.preventDefault();
    document.querySelector("form p:nth-of-type(2)").style.color =
      "hsl(7, 71%, 60%)";
  } else if (!emailInput.value.includes("@")) {
    valid = false;
    e.preventDefault();
    emailInput.style.borderColor = "hsl(7, 71%, 60%)";
    cloneP.style.display = "block";
  } else if (nameInput.value == "") {
    e.preventDefault();
    valid = false;
  } else valid = true;
  if (valid) {
    //show name in ticket and github user name
    span.textContent = nameInput.value;
    document.querySelector(".name").innerHTML = nameInput.value;
    gitName.append(gitInput.value);
    ticket.style.display = "block";
    document.forms[0].style.display = "none";

    span.style.cssText =
      "    background-image: linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%));color: transparent;background-clip: text;";
    h1.innerHTML = `Congrats, `;
    h1.appendChild(span);
    h1.innerHTML += "!<br> Your ticket is ready";

    span.textContent = emailInput.value;
    span.style.cssText = "color:hsl(7, 88%, 67%)";

    p.innerHTML = `We've emailed your ticket to </br> `;
    p.appendChild(span);
    p.innerHTML += ` Send will send updates in </br> the run up to the event`;
  }
});

let b;
document
  .querySelector("form input[type=file]")
  .addEventListener("change", function () {
    b = URL.createObjectURL(fileInput.files[0]);
    avatar.style.cssText = `background:url(${b});background-size:contain`;

    document.querySelector("form div:first-of-type span").style.display =
      "none";
    buttons.style.display = "flex";

    document.querySelector(
      ".bottom .avatar"
    ).style.cssText = `background-image:url(${b});background-size:contain`;
  });

//remove button
removeBtn.addEventListener("click", function (e) {
  avatar.style.cssText =
    "background:url(assets/images/icon-upload.svg);background-size:contain";

  buttons.style.display = "none";
  document.querySelector("form div:first-of-type span").style.display = "block";
  fileInput.value = "";

  valid = false;
});

//change button
changeBtn.addEventListener("click", function (e) {
  fileInput.click();
});

//ticket date and number
const date = new Date();
const dateDisplay = { month: "short", day: "numeric", year: "numeric" };
document.querySelector(".date").textContent = date.toLocaleDateString(
  "en-US",
  dateDisplay
);

document.querySelector(".side").innerHTML = `#${Math.floor(
  Math.random(10) * 1000000
)}`;

if (window.innerWidth < 380) {
  document.querySelector("body > img:nth-of-type(2)").src =
    "assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
  document.body.style.background = "url(assets/images/background-mobile.png)";
  document.querySelector("body > img:first-of-type").style.display = "none";
}
