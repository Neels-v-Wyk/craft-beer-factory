export default function addButtons(parentElement) {
    var buttons = document.createElement("div")
    var form = document.createElement("form");

    buttons.id = "button-div"

    var homeButton = new Button("radio", "tab-buttons", "Home", true, null);
    var menuButton = new Button("radio", "tab-buttons", "Menu", false, null);
    var contactButton = new Button("radio", "tab-buttons", "Contact", false, null);

    form.appendChild(homeButton.createButton);
    form.appendChild(menuButton.createButton);
    form.appendChild(contactButton.createButton);

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

    get createButton() {
        var buttonDiv = document.createElement("div");
        var buttonInput = document.createElement("input");
        var buttonLabel = document.createElement("label");

        buttonInput.type = this.Btype
        buttonInput.value = this.Bvalue
        buttonInput.checked = this.Bdefault
        buttonInput.name = this.Bname
        buttonInput.id = this.Bname
        buttonLabel.htmlFor = this.Bname
        buttonLabel.innerHTML = this.Bvalue

        buttonDiv.classList.add("button")

        buttonDiv.appendChild(buttonInput);
        buttonDiv.appendChild(buttonLabel);

        return buttonDiv;
    }
}