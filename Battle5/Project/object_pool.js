// rock class is object that fills up object pool
class Rock {
    constructor() {
        this.activated = false;
        console.log("Created rock.");
    }
    activate() {
        this.activated = true;
    }
    deactivate() {
        this.activated = false;
    }
    play() {
        // do nothing, it is a rock
    }
}
class ObjectPool {
    constructor(quantity) {
        // should be array, but using list of objects
        this.objs = [];
        this.initialized = false;
        // maximum amount of objects in object pool
        this.maxQuantity = quantity;
    }
    initialize() {
        if(this.initialized) {
            return;
        }
        
        for(var j = 0; j < this.maxQuantity; j++) {
            // create all rocks and add them to array (list)
            this.objs.push(new Rock());
        }
        this.initialized = true;
    }
    activateObject() {
        // go to next available object
        // activate it
        for(var i = 0; i < this.maxQuantity; i++) {
            if(!this.objs[i].activated) {
                element = document.getElementById((i).toString());
                element.innerHTML = "Rock #" + i + ". Activated";
                this.objs[i].activate();
                break;
            }
        }
        
    }
    deactivateObject(num) {
        // deactivate selected rock (clicked button on Test)
        if(num < this.maxQuantity) {
            this.objs[num].deactivate();
            element = document.getElementById(num.toString());
            element.innerHTML = "Rock #" + (num) + ". Deactivated";
        }
    }
    
}

