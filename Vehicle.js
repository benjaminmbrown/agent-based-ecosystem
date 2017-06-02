var Vehicle = function(x, y, Type) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.position = createVector(x, y);
    this.r = 3;
    this.minSpeed = 1;
    this.maxSpeed = 4;
    this.minForce = 0.01;
    this.maxForce = 0.015;
    this.mass = 155;
    this.type = Type || 2;
    this.flowfield;

    this.cohesionDistance = 150;
    this.separationDistance = 45;
    this.alignmentDistance = 100;

    this.cohesionForce = 1.0;
    this.separationFoce = 1.6;
    this.alignmentForce = 1.0;

    this.wanderRadius = 19;
    this.wanderDistance = 4;
    this.wanderCenter = 0;
    this.wanderAngle = 0;
    this.wanderForce = createVector();
    this.life = 255;
    this.age = 255;

    this.visionDepth = 80
    this.visionDegrees = random(10, 90); //width of cone of vision

    this.c = color(0, 0, 255, 10);

    if (this.type == 2) {
        this.c = color(255, 0, 0, 10);
    }

    this.run = function(flock) {
  
      this.flock(flock.members);
      this.followFlow(this.flowfield);
      this.update();
      this.borders();
      this.display();
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.setFlowfield = function(flowfield){
        this.flowfield = flowfield;
    }

    this.display = function() {
        var theta = this.velocity.heading() + PI / 2;

        fill(color(255, 0, 0, 30));
        stroke(color(255, 0, 0, 100));
        noStroke();
        ellipse(this.position.x, this.position.y, this.separationDistance, this.separationDistance);

        // // //alignment
        fill(color(255, 0 ,255, 10));
        noStroke();
        ellipse(this.position.x, this.position.y, this.alignmentDistance, this.alignmentDistance);

        // //cohesion
        fill(color(255, 15 ,115, 15));
        noStroke();
        ellipse(this.position.x, this.position.y, this.cohesionDistance/2, this.cohesionDistance/2);

        fill(this.c);
        stroke(200);
        strokeWeight(1);
        noStroke();
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
        

    }
}
_.extend(Vehicle.prototype, steeringBehaviors);
_.extend(Vehicle.prototype, forceBehaviors);
_.extend(Vehicle.prototype, flockBehaviors);
_.extend(Vehicle.prototype, borderBehaviors);
_.extend(Vehicle.prototype, utilityBehaviors);
_.extend(Vehicle.prototype, flowBehaviors);
