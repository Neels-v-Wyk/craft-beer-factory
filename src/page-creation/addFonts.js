// load fonts into header

function addFonts() {
    var titleFont = document.createElement("style")
    titleFont.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
        `

    document.head.appendChild(titleFont)  
}

export {addFonts as default};