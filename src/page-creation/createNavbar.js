function createNavbar(element) {
    var navbar = document.createElement("div");
    navbar.classList.add("navbar");
    navbar.innerText = "Craft Beer Restaurant"
    element.appendChild(navbar);
    addButton("Home", null, console.log("button works"));
    // addButton("Menu");
    // addButton("Contact");
}

function addButton(buttonName, parentElement, tabFunction) {

    button = document.createElement("button");
    button.classList.add("page-selector");
    button.textContent = buttonName;
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("current-page")) { return };
        makeActiveTab(button);
        tabFunction();
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