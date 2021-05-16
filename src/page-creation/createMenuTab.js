export default function createMenuTab(parentElement) {
    parentElement.appendChild(createMenuItems())
}

function createMenuItems(){
    var menuItems = document.createElement("div");
    menuItems.classList.add("menuItems")

    var noturine = new menuItem("//live.staticflickr.com/4879/32531507678_821f982b1a_b.jpg", "Noturiné", "$3.99")
    var sausage_juice = new menuItem("https://live.staticflickr.com/65535/48320318901_bca39d721e_k.jpg", "Sausage Juice", "$3.49")
    var golden_fluid = new menuItem("https://cdn.pixabay.com/photo/2017/06/20/22/43/beer-2425247_960_720.jpg", "Golden Fluid", "$2.99")
    var peene_sap = new menuItem("https://get.pxhere.com/photo/drink-beer-glass-beer-lager-pint-glass-pint-alcoholic-beverage-Bia-h-i-beer-stein-beer-cocktail-mug-drinkware-cider-Ice-beer-distilled-beverage-non-alcoholic-beverage-tableware-1619184.jpg", "Peene Sap", "$3.14")

    // I'm too lazy to refactor the code, the last two parameters to menuRow() are useless
    var lightBeer = new menuRow([noturine, sausage_juice, golden_fluid, peene_sap], "BEERS YO", "#faf0be")

    menuItems.appendChild(lightBeer.addRow)
    return menuItems;
}


class menuRow {
    constructor(items, name, color) {
        this.items = items
        this.name = name
        this.color = color
    }

    get addRow(){
        var row = document.createElement("div")

        this.items.forEach(element => {
            row.appendChild(element.createItem);
        });

        // var lb = new lineBreak(this.name, this.color)
        // row.appendChild(lb.create)
        row.classList.add("menuItemRow")

        return row;
    }
}

class menuItem {
    constructor(imageUrl, name, price) {
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
    }

    get createItem() {

        var item = document.createElement("div");
        item.classList.add("menuItem")

        var img = document.createElement("div");
        img.classList.add("menuItemPic")

        var imgPic = document.createElement("img")
        imgPic.classList.add("menuItemImage")
        imgPic.src = this.imageUrl

        img.appendChild(imgPic)

        var desc = document.createElement("div");
        desc.classList.add("menuItemDescription")

        var descDollars = document.createElement("p");
        descDollars.textContent = this.name

        var descName = document.createElement("p");
        descName.textContent = this.price

        desc.appendChild(descDollars)
        desc.appendChild(descName)

        item.appendChild(img)
        item.appendChild(desc)


        return item
    }
}

// line breaks aren't used right now because the way I implemented them is trash

class lineBreak {
    constructor(name, color) {
        this.name = name;
        this.color = color
    }

    get create(){
        var lineBreakDiv = document.createElement("div")
        var lineBreakLine1 = document.createElement("div")
        var lineBreakLine2 = document.createElement("div")
        var lineBreakText = document.createElement("h2")

        lineBreakDiv.classList.add("lineBreak")
        lineBreakDiv.style.color = this.color
        lineBreakLine1.classList.add("lineBreakLine")
        lineBreakLine2.classList.add("lineBreakLine")
        lineBreakDiv.style.color = this.color
        lineBreakLine1.style.backgroundColor = this.color
        lineBreakLine2.style.backgroundColor = this.color


        lineBreakText.textContent = this.name

        lineBreakDiv.appendChild(lineBreakLine1)
        lineBreakDiv.appendChild(lineBreakText)
        lineBreakDiv.appendChild(lineBreakLine2)

        return lineBreakDiv;
    }
}