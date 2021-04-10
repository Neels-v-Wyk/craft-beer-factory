import addButtons from "./addButtons.js"

function createNavbar(element) {
    var navbar = document.createElement("div");
    navbar.classList.add("navbar");

    var titleText = document.createElement("h1");
    titleText.innerText = "Craft Beer Restaurant"
    titleText.classList.add("titleText")
    // addButton("stuff")
    // addButton("Menu");
    // addButton("Contact");

    navbar.appendChild(titleText);

    addButtons(navbar)
    
    element.appendChild(navbar);
};

export {createNavbar as default}; 