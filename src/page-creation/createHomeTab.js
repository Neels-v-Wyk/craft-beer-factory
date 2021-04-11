import beerIcon from "../assets/beer.svg"

export default function createHomeTab(parentElement) {
    var beerImage = new Image();
    console.log(beerIcon)

    beerImage.src = beerIcon;
    parentElement.appendChild(beerImage);
}