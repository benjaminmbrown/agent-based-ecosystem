'use strict';
var attractBehaviors = {
	//attrace one other object assuming it has a vector position
	attract: function(p){
		var dir = p5.Vector.sub(this.position,p.position);
		var dist= dir.mag();
		dist = constrain(dist,5,50);
		dir.normalize();
		var strength = 1 * ((this.power)?this.power:100)/(dist*dist);
		dir.mult(strength);
		return dir;
	}
}