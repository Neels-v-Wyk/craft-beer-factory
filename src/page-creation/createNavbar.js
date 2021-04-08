function createNavbar(element) {
    var navbar = document.createElement("div");
    navbar.classList.add("navbar");
    element.appendChild(navbar);

}

export {createNavbar as default}; 