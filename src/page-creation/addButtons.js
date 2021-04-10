function addButtons(parentElement) {
    var form = document.createElement("form");

    var homeButton = new Button("radio", "Home", "home", false, null);

    form.appendChild(homeButton);
    // form.appendChild(menuButton());
    // form.appendChild(contactButton());

    parentElement.appendChild(form)
    
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
        buttonLabel.innerHTML = this.Bname

        buttonDiv.appendChild(buttonInput);
        buttonDiv.appendChild(buttonLabel);

        return buttonDiv;
    }
}

export {addButtons as default}; 