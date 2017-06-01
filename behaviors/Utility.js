'use strict';

var utilityBehaviors = {
	getFuturePosition: function(target){
        var lookahead = p5.Vector.dist(target.position, this.position) / this.maxSpeed;
        var futurePosition = target.position.copy();
        var futureVelocity = target.velocity.copy();
        futureVelocity.mult(lookahead);
        futurePosition.add(futureVelocity);
        return futurePosition;
	},
	getNormalPoint(predicted,a,b){
		  var aToP = p5.Vector.sub(predicted, a);
        var aToB = p5.Vector.sub(b, a);

        aToB.normalize(); //dot product for scalar
        aToB.mult(aToP.dot(aToB));

        return p5.Vector.add(a, aToB); //this is the normal point
	},
	isTargetVisible: function(target){
		   //var depth = this.visionDepth;
        var angle = p5.Vector.angleBetween(this.velocity, target.velocity);

        if ((degrees(angle) > 55)) {
            return true
        } else {
            return false;
        }
	},
	predictSelfFuturePosition: function(){
		var predict = this.velocity.copy();
        predict.normalize();
        predict.mult(25); ///look 25 pixels ahead

        return p5.Vector.add(this.position, predict);
	},
	setAngle: function(vector, value){
		vector.x = cos(value) * vector.mag();
        vector.y = sin(value) * vector.mag();
	}
}