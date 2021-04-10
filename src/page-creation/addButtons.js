import createHomeTab from "./createHomeTab.js"
import createMenuTab from "./createMenuTab.js"
import createContactTab from "./createContactTab.js"

export default function addButtons(parentElement) {
    var buttons = document.createElement("div")
    var form = document.createElement("form");

    buttons.id = "button-div"

    var homeButton = new Button("radio", "tab-buttons", "Home", true, test());
    var menuButton = new Button("radio", "tab-buttons", "Menu", false, null);
    var contactButton = new Button("radio", "tab-buttons", "Contact", false, null);

    form.appendChild(homeButton.createButton);
    form.appendChild(menuButton.createButton);
    form.appendChild(contactButton.createButton);

    form.classList.add("tabForm");
    buttons.appendChild(form);

    parentElement.appendChild(buttons);
    
}

class Button {
    constructor(Btype, Bname, Bvalue, Bdefault, pageLoadFunction) {
        this.Btype = Btype;
        this.Bname = Bname;
        this.Bvalue = Bvalue;
        this.Bdefault = Bdefault;
        this.pageLoadFunction = pageLoadFunction;
    }

    createTab() {
        this.pageLoadFunction()
    }

    destroyTab() {
        document.getElementById("tab").remove()
    }

    get createButton() {
        var buttonDiv = document.createElement("div");
        var buttonInput = document.createElement("input");
        var buttonLabel = document.createElement("label");

        buttonInput.type = this.Btype
        buttonInput.value = this.Bvalue
        buttonInput.checked = this.Bdefault
        buttonInput.name = this.Bname
        buttonInput.id = this.Bvalue
        buttonLabel.htmlFor = this.Bvalue
        buttonLabel.innerHTML = this.Bvalue

        buttonDiv.classList.add("button")

        buttonDiv.appendChild(buttonInput);
        buttonDiv.appendChild(buttonLabel);

        if (this.Bdefault) {
            buttonDiv.classList.add("activeTab")
        }

        buttonDiv.addEventListener("click", (e) => {
            makeActive(e);
            this.pageLoadFunction
            this.destroyPage();
        });

        return buttonDiv;
    }
}

function makeActive(e) {
    var currentActive = document.getElementsByClassName("activeTab");
    currentActive[0].classList.remove("activeTab");

    e.toElement.classList.add("activeTab")
}

function test() {
    console.log("e");
}