var vehicles = [];
var flock;
var predators = [];
var debug;
var plants = [];
var Agents = [];

function setup() {

    createCanvas(900, 600);
    setFrameRate(460);
    flock = new Flock();
    predators = new Flock();
    var type = 1;


    for (var i = 0; i < 5; i++) {
        var v = new Vehicle(width / 2, height / 2, type);
        flock.addVehicle(v);
    }
    // for (var i = 0; i < 10; i++) {
    //     plants.push(new Plant(random(0, width), random(0, height)));
    // }

    for (var i = 0; i < 16; i++) {

        Agents.push(new Agent(random(0, width), random(0, height)));
    }
}


function draw() {
    background(255);
    for (var i = 0; i < plants.length; i++) {
        plants[i].run();
          if (plants[i].isAlive()) {
            plants[i].run()
        } else{
            plants.splice(i, 1);
        }
    }
    for (var i = 0; i < Agents.length; i++) {
        if (Agents[i].isAlive()) {
            Agents[i].run()
        } else{
            Agents.splice(i, 1);
        }
    }



    flock.run();
    predators.run();
    //spawnNew()
    updateEnvironment();

}

function drawStats (){
    textSize(20);
    text('Flock size' + flock.length, 10,30);
    fill(0,102,53);
}
function updateEnvironment (){

}

function respawnFlora(){

}

function mouseDragged() {
    flock.addVehicle(new Vehicle(mouseX, mouseY, 1));
}

function keyPressed() {
    for (var i = 0; i < key; i++) {
        predators.addVehicle(new Vehicle(width / 2, height / 2));
    }

}
