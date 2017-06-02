'use strict';

var flowBehaviors = {
	followFlow: function(flowfield){
        var desired = flowfield.lookup(this.position);
        desired.mult(1);
        this.applyForce(this.steerTo(desired));

	}
}