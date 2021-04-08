function createNavbar(element) {
    var navbar = document.createElement("div");
    navbar.classList.add("navbar");
    navbar.innerText = "Craft Beer Restaurant"
    element.appendChild(navbar);

}

export {createNavbar as default}; 