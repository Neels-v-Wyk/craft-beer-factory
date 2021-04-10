import beerIcon from "../assets/beer.svg"

export default function createHomeTab(parentElement) {
    var beerImage = new Image();
    beerImage.src = beerIcon;
    parentElement.appendChild(beerImage);
}