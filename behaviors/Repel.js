'use strict';

var repelBehaviors = {
	repel: function(){
		var dir = p5.Vector.sub(this.position,p.position);
		var d = dir.mag();
		dir.normalize(); //just want the direction
		d = constrain(d,1,100);
		var force = -1 *((this.power)?this.power:100)/(d*d);
		dir.mult(force);
		return dir;
	}
}