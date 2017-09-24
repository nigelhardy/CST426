// Effectily the type object
var Plant = function(height, color) {
    this.height = height;
    this.color = color;
    this.getHeight = function() { return this.height };
};

var Flower = function(plant) {
    this.plant = plant;
    this.inBloom = false;
    this.getHeight = function() {
        return this.plant.getHeight();
    }
    this.bloom = function() {
        if(this.inBloom == true) {
            return "Already in bloom!";
        }
        this.inBloom = true;
        return "I'm blooming!";
        
    }
};
// tree contains plant as member class
var Tree = function(plant) {
    this.plant = plant;
    this.leaves = true;
    this.getHeight = function() {
        return this.plant.getHeight();
    }
    this.loseLeaves = function() {
        if(this.leaves == false) {
            return "Leaves have already been lost!";
        }
        this.leaves = false;
        return "Losing leaves for winter!";
        
    }
};