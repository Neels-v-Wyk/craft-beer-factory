import createNavbar from "./createNavbar.js"
import createHomeTab from "./createHomeTab.js"
import addFonts from "./addFonts.js"
import blankSlate from "./blankSlate.js";

function createPage(element) {
    createNavbar(element);
    addFonts();

    // need this for initial pageload
    createHomeTab(blankSlate("homeTab"));

}

export {createPage as default};