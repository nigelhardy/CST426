var topics = {};
var plants = [];
// Jquery code allowing for subscription
jQuery.Topic = function( id ) {
  var callbacks, method,
    topic = id && topics[ id ];
 
  if ( !topic ) {
    callbacks = jQuery.Callbacks();
    topic = {
      publish: callbacks.fire,
      subscribe: callbacks.add,
      unsubscribe: callbacks.remove
    };
    if ( id ) {
      topics[ id ] = topic;
    }
  }
  return topic;
};

class plant {
  constructor(num) {
      this.size = 1;
      this.num = num;
  }
  grow() {
    this.size++;
    console.log("Plant #" + this.num.toString() + ". Size = " + this.size.toString() + "");
    var temp = document.getElementById(this.num.toString());
    temp.innerHTML = "Plant #" + this.num.toString() + ". Size = " + this.size.toString() + "";
  }
}

function update() {
    $.Topic( "update" ).publish( "grow" );
    // grow each plant by 1, called every second
    plants.forEach(function(element) {
        element.grow();
    });
}
setInterval(update, 1000);