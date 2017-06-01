'use strict';
//MOTION BEHAVIORS

var steeringBehaviors = {
	arrive: function(target){
    	var desired = p5.Vector.sub(target, this.position);
        var distance = desired.mag();
        if (distance < 100) {
            var scaledSpeed = map(distance, 0, 100, 0, this.maxSpeed);
            desired.setMag(scaledSpeed);
        } else {
            desired.setMag(this.maxSpeed)
        }
        this.applyForce(this.steerTo(desired));
    }, 

    evade: function(target) {
        this.flee(this.getFuturePosition(target));
    },

    flee: function(target){
    	var desired = p5.Vector.sub(this.position, target);
        desired.setMag(1);
        return this.steerTo(desired);
    }, 

    pursue: function(target){
    	this.seek(this.getFuturePosition(target));
    },

    seek: function (target){
		var desired = p5.Vector.sub(target, this.position);
        desired.setMag(this.maxSpeed);
        return this.steerTo(desired);
	},

	steerTo: function(desired) {
        var steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        return steer;
    },

    wander: function () {
    	this.wanderCenter = this.velocity.copy();
        this.wanderCenter.setMag(1);
        this.wanderCenter.mult(this.wanderDistance);

        var angleChange = 3
        var displacement = createVector(0, -1);
        displacement.mult(this.wanderRadius);

        this.setAngle(displacement, this.wanderAngle);
        this.wanderAngle += random(-.8, .8);

        this.wanderForce = this.wanderCenter.add(displacement);
        this.wanderForce.limit(this.maxForce);

        return this.wanderForce;
    }
}