export default function blankSlate(className) {

    try {
        var mainContent = document.getElementById("mainContent")
        mainContent.remove();
    }
    catch (TypeError) {
        console.log("Page loading for first time")
    }
    finally {
        var mainContent = document.createElement("div")
        mainContent.classList.add(className)
        mainContent.id = "mainContent"
    }

    document.getElementById("content").appendChild(mainContent)

    return mainContent;
}