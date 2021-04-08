import createNavbar from "./createNavbar.js"
import addFonts from "./addFonts.js"

function createPage(element) {
    createNavbar(element);
    addFonts();
    // createImages
    // createTabs
    // etc
}

export {createPage as default};