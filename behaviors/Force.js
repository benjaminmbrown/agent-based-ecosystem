'use strict';
//MOTION BEHAVIORS

var forceBehaviors = {

	applyForce: function(force) {
		this.acceleration.add(force);
	}
}