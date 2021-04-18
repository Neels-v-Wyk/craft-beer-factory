import beerIcon from "../assets/beer.png"

export default function createHomeTab(parentElement) {
    parentElement.appendChild(createBeer());
    parentElement.appendChild(createIntro());
}

function createBeer() {
    var beerDiv = document.createElement("div");
    beerDiv.classList.add("beerDiv")

    var beerImage = new Image();
    beerImage.src = beerIcon;
    beerImage.classList.add("beerIcon")
    
    beerDiv.appendChild(beerImage)

    return beerDiv;
}

function createIntro() {

    var menuTextDiv = document.createElement("div")
    var introDiv = document.createElement("p");
    introDiv.classList.add("intro")
    var infoDiv = document.createElement("p");
    infoDiv.classList.add("info")

    introDiv.textContent = "Welcome to the Craft Beer Factory."
    infoDiv.textContent = "We offer a small selection of beers, each flavor created using only our most unique blend of the industry standard ratios for hops and yeast and stuff. We brew small batches of beer with love, care, and at an industrial scale. It is our mission to make a beer so utterly average in every way that the population at large can enjoy it."

    menuTextDiv.appendChild(introDiv)
    menuTextDiv.appendChild(infoDiv)

    return menuTextDiv;
}