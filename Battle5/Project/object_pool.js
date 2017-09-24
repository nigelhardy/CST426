class OBJ {
    constructor() {
        this.activated = false;
        console.log("Created Object.");
    }
    activate() {
        this.activated = true;
    }
    deactivate() {
        this.activated = false;
    }
}

class Rock {
    constructor() {
        this.activated = false;
        console.log("Created rock.");
    }
    
}
Object.setPrototypeOf(Rock.prototype, OBJ);

class ObjectPool {
    constructor(quantity) {
        this.objs = [];
        this.offset = 0;
        this.initialized = false;
        this.maxQuantity = quantity;
    }
    initialize() {
        if(this.initialized) {
            return;
        }
        
        for(var j = 0; j < this.maxQuantity; j++) {
            this.objs.push(new Rock());
        }
        this.initialized = true;
    }
   activateObject(type) {
        if(this.offset >= this.maxQuantity) {
            alert("Max objects.");
            return;
        }
        //console.log((this.offset).toString());
        element = document.getElementById((this.offset).toString());
        element.innerHTML = "Rock #" + this.offset + ". Activated";
        this.offset++;
    }
    deactivateObject() {
        if(this.offset <= 0) {
            alert("Min objects.");
            return;
        }
        element = document.getElementById((this.offset-1).toString());
        element.innerHTML = "Rock #" + (this.offset-1) + ". Deactivated";
        this.offset--;
    }
    
}

