function Agent(x, y) {

    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);

    // this.lifeForce = 100;
    this.age = 0;
    this.maxLifespan = 255;
    this.life = 100;

    this.c = color(0, 0, 0);

    this.run = function() {
        this.update();
        this.display();
    }

    this.display = function() {
        stroke(255, this.maxLifespan - this.age); //gets more transparent as it dies
        strokeWeight(2);
       
        fill(0, this.maxLifespan - this.age);
        console.log('alpha', alpha);
        ellipse(this.position.x, this.position.y, 24, 24);
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity)
        this.age += 1;
    }

    this.isAlive = function() {
        return this.age < this.maxLifespan ? true : false;
    }
}
