'use strict';
//behaviors require a flock
//Optimizations - move flock[i] positions to be stored in flock var
var flockBehaviors = {
    //FUNCTIONS//
	align: function (flock){
        var sum = createVector(0, 0);
        var count = 0;
        //could optimize this in the flock itself.. provide some var that keeps track as flock is updated
        for (var i = 0; i < flock.length; i++) {
            var distance = p5.Vector.dist(this.position, flock[i].position);
            if ((distance > 0) && (distance < this.alignmentDistance) && (this.isTargetVisible(flock[i]))) {
                sum.add(flock[i].velocity);
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            sum.normalize();
            sum.mult(this.maxSpeed);
            return this.steerTo(sum);
        } else {
            return createVector(0, 0);
        }
	},

	cohesion: function(flock){
		var sum = createVector(0, 0);
        var count = 0;
        for (var i = 0; i < flock.length; i++) {
            var distance = p5.Vector.dist(this.position, flock[i].position);
            if ((distance > 0) && (distance < this.cohesionDistance)) {
                sum.add(flock[i].position);
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            return this.seek(sum);
        } else {
            return createVector(0, 0);
        }
	},

    flock: function(flock){
        var sep = this.separate(flock);
        var ali = this.align(flock);
        var coh = this.cohesion(flock);
        sep.mult(1.6);
        ali.mult(1.0);
        coh.mult(1.0);
        this.applyForce(ali);
        this.applyForce(coh);
        this.applyForce(sep);
    },

	separate: function(flock){
		var count = 0;
        var steer = createVector(0, 0);
        for (var i = 0; i < flock.length; i++) {
            var distance = p5.Vector.dist(this.position, flock[i].position);
            if ((distance > 0) && (distance < this.separationDistance)) {
                var diff = p5.Vector.sub(this.position, flock[i].position);
                diff.normalize();
                diff.div(distance);
                steer.add(diff);
                count++;
            }
        }

        if (count > 0) {
            steer.div(count);
        }

        if (steer.mag() > 0) {
            steer.normalize();
            steer.mult(this.maxSpeed);
            steer.sub(this.velocity);
            steer.limit(this.maxForce);
        }
        
        return steer;
	}
}