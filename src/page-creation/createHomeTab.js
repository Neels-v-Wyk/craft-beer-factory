import beerIcon from "../assets/beer.png"

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