var Vehicle = function(x, y, Type) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.position = createVector(x, y);
    this.r = 3;
    this.minSpeed = 1;
    this.maxSpeed = 8;
    this.minForce = 0.01;
    this.maxForce = 0.015;
    this.mass = 155;

    this.type = Type || 2;

    this.wanderRadius = 19;
    this.wanderDistance = 4;
    this.wanderCenter = 0;
    this.wanderAngle = 0;
    this.wanderForce = createVector();
    this.life = 255;
    this.age = 255;

    this.cohesionDistance = 200;
    this.desiredSeparation = 45;
    this.alignDistance = 100;

    this.visionDepth = 80
    this.visionDegrees = random(10, 90); //width of cone of vision

    this.c = color(0, 0, 255, 10);

    if (this.type == 2) {
        this.c = color(255, 0, 0, 20);
    }

    this.run = function(vehicles) {
      // this.flock(vehicles); 
      this.flock(vehicles)
       // this.seek(createVector(mouseX, mouseY));
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

    this.display = function() {
        var theta = this.velocity.heading() + PI / 2;

        fill(color(255, 0, 0, 30));
        stroke(color(255, 0, 0, 100));
        ellipse(this.position.x, this.position.y, this.desiredSeparation, this.desiredSeparation);

        // // //alignment
        // fill(color(255, 0 ,255, 10));
        // noStroke();
        // ellipse(this.position.x, this.position.y, this.alignDistance, this.alignDistance);

        // //cohesion
        fill(this.c);
        noStroke();
        ellipse(this.position.x, this.position.y, this.cohesionDistance/2, this.cohesionDistance/2);

        fill(this.c);
        stroke(200);
        strokeWeight(1);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
        //separation field

    }
}
_.extend(Vehicle.prototype, steeringBehaviors);
_.extend(Vehicle.prototype, forceBehaviors);
_.extend(Vehicle.prototype, flockBehaviors);
_.extend(Vehicle.prototype, borderBehaviors);
_.extend(Vehicle.prototype, utilityBehaviors);
