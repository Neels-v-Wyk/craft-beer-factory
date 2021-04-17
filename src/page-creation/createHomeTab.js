import beerIcon from "../assets/png-beer.png"

export default function createHomeTab(parentElement) {
    parentElement.appendChild(createBeer());

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