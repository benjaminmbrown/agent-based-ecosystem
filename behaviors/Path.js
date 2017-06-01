'use strict';

var pathBehaviors = {
	followPath: function(path){
		var predict = this.velocity.copy();
        predict.normalize();
        predict.mult(50);
        var predictLoc = p5.Vector.add(this.position, predict);

        var normal = null;
        var target = null;
        var record = 1000000;
        for (var i = 0; i < path.points.length - 1; i++) {

            var a = path.points[i];
            var b = path.points[i + 1];

            var normalPoint = this.getNormalPoint(predictLoc, a, b);

            if (normalPoint.x < a.x || normalPoint.x > b.x) {
                normalPoint = b.copy();
            }

            var distance = p5.Vector.dist(predictLoc, normalPoint);


            if (distance < record) {
                record = distance;
                normal = normalPoint;

                var dir = p5.Vector.sub(b, a);
                dir.normalize();
                dir.mult(10);
                target = normal.copy();
                target.add(dir);
            }
        }

        if (record > path.radius && target !== null) {
            this.seek(target);
        }

        //draw line
        // fill(200);
        // stroke(200);
        // line(this.position.x, this.position.y, predictLoc.x, predictLoc.y);
        // ellipse(predictLoc.x, predictLoc.y, 4, 4);

        // // Draw normal location
        // fill(200);
        // stroke(200);
        // line(predictLoc.x, predictLoc.y, normal.x, normal.y);
        // ellipse(normalPoint.x, normalPoint.y, 4, 4);
        // stroke(200);
        // if (distance > p.radius) fill(255, 0, 0);
        // noStroke();
        // ellipse(target.x + dir.x, target.y + dir.y, 8, 8);

	}
}