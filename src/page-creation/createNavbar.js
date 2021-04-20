import addButtons from "./addButtons.js"

function createNavbar(element) {
    var navbar = document.createElement("div");
    navbar.classList.add("navbar");

    var titleDiv = document.createElement("div")
    titleDiv.classList.add("titleText")

    var titleText = document.createElement("h1");
    titleText.innerText = "Craft Beer Factory"

    titleDiv.appendChild(titleText)

    navbar.appendChild(titleDiv);

    addButtons(navbar)

    element.appendChild(navbar);
};

export {createNavbar as default}; 