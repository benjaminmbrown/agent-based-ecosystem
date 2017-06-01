'use strict';
//FORCE BEHAVIORS
var forceBehaviors = {
	applyForce: function(force) {
		this.acceleration.add(force);
	}
}