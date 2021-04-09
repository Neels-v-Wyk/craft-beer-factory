import addHome from "./addHome.js"

function createNavbar(element) {
    var navbar = document.createElement("div");
    navbar.classList.add("navbar");
    navbar.innerText = "Craft Beer Restaurant"
    element.appendChild(navbar);
    
    addButton("Home", navbar, addHome());
    // addButton("Menu");
    // addButton("Contact");
}

function addButton(buttonName, parentElement, tabFunction) {

    var button = document.createElement("button");
    button.classList.add("page-selector");
    button.textContent = buttonName;
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("current-page")) { return };
        makeActiveTab(button);
        parentElement.appendChild(tabFunction());
    });
}

function makeActiveTab(tab) {
    const buttons = document.querySelectorAll("page-selector");

    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("current-page");
      }
    });
  
    button.classList.add("current-page");
}


export {createNavbar as default}; 