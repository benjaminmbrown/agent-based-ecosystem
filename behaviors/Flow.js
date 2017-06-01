'use strict';

var flowBehaviors = {
	followFlow: function(flowfield){
        var desired = flowfield.lookup(this.position);
        desired.mult(this.maxSpeed);
        this.applyForce(this.steerTo(desired));

	}
}