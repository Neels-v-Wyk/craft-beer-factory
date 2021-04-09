function addHome(parentElement) {
    var home = document.createElement("div")
    home.innerHTML = "hello"
    return home;
}

export {addHome as default};