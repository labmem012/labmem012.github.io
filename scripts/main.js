const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/confusedcat.jpg") {
        myImage.setAttribute("src", "images/cicosmile.png");
    } else if (mySrc === "images/cicosmile.png") {
        myImage.setAttribute("src", "images/endpage1.png");
    } else {
        myImage.setAttribute("src", "images/confusedcat.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}, thanks for your visit`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}, hope you have a nice day`;
}

myButton.onclick = () => {
    setUserName();
};