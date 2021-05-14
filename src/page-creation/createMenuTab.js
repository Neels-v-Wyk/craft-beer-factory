export default function createMenuTab(parentElement) {
    parentElement.appendChild(createMenuItems())
}

function createMenuItems(){
    var menuItems = document.createElement("div");

    var noturine = new menuItem("https://i0.hippopx.com/photos/532/903/624/beer-drink-drinking-preview.jpg", "Noturiné", "$3.99")
    var sausage_juice = new menuItem("https://live.staticflickr.com/65535/48320318901_bca39d721e_k.jpg", "Sausage Juice", "$3.49")
    var golden_fluid = new menuItem("https://cdn.pixabay.com/photo/2017/06/20/22/43/beer-2425247_960_720.jpg", "Golden Fluid", "$2.99")
    var lightBeer = new menuRow([noturine, sausage_juice, golden_fluid], "BLONDES", "#faf0be")

    menuItems.appendChild(lightBeer.addRow)
    menuItems.classList.add("pehis")

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

        var lb = new lineBreak(this.name, this.color)
        row.appendChild(lb.create)

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

class lineBreak {
    constructor(name, color) {
        this.name = name;
        this.color = color
    }

    get create(){
        var lineBreakDiv = document.createElement("div")
        var lineBreakLine = document.createElement("div")
        var lineBreakText = document.createElement("h2")

        lineBreakDiv.classList.add("lineBreak")
        lineBreakDiv.style.color = this.color
        lineBreakLine.classList.add("lineBreakLine")

        lineBreakText.textContent = this.name

        lineBreakDiv.appendChild(lineBreakLine)
        lineBreakDiv.appendChild(lineBreakText)
        lineBreakDiv.appendChild(lineBreakLine)

        return lineBreakDiv;
    }
}