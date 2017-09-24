class Soldier {
    constructor() {
        
    }
    clone() {
        console.log("CLONING!");
        this.soldierName = "SoldierAbstract";
    }
    show(element) {
      var frag = document.createDocumentFragment();
      var span = document.createElement("span");
      span.innerHTML = "<p>" + this.soldierName + "</p>";
      for (var i = 0, ii = span.childNodes.length; i < ii; i++) {
          frag.appendChild(span.childNodes[i]);
      }
      element.appendChild(frag);
  }
}
class BazookaSolider {
  constructor() {
      this.prototype.soldierName = "BazookaSoldier";
  }
  clone()
  {
    console.log("Cloning bazooka soldier."); 
    return new BazookaSolider();
    
  }
};

Object.setPrototypeOf(BazookaSolider.prototype, Soldier);

class SwordSolider {
  constructor() {
      this.prototype.soldierName = "SwordSoldier";
  }
  clone()
  {
    console.log("Cloning sword soldier."); 
    return new SwordSolider();
  }
  
};

Object.setPrototypeOf(SwordSolider.prototype, Soldier);

class Spawner
{
  constructor(pt) {
      this.prototype_ = pt;
  }

  spawnSoldier()
  {
    return this.prototype_.clone();
  }
};