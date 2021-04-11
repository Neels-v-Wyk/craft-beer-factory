import beerIcon from "../assets/beer.svg"

export default function createHomeTab(parentElement) {
    var beerImage = new Image();
    console.log(beerIcon)

    beerImage.src = beerIcon;
    beerImage.classList.add("beerIcon")
    parentElement.appendChild(beerImage);
}