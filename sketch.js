var vehicles = [];
var flock;
var predators = [];
var debug;
var plants = [];
var Agents = [];
var flowfield;

function setup() {

    createCanvas(880, 400);
    setFrameRate(60);
    flock = new Flock();
    predators = new Flock();
    var type = 1;
    flowfield = new Flowfield(20);

    for (var i = 0; i < 3; i++) {
        var v = new Vehicle(width / 2, height / 2, type);
        v.setFlowfield(flowfield);
        flock.addMember(v);

        // plants.push(new Plant(random(0, width), random(0, height)));
        // Agents.push(new Agent(random(0, width), random(0, height)));
    }
}

function draw() {
    background(255);
    // for (var i = 0; i < plants.length; i++) {
    //     plants[i].run();
    //       if (plants[i].isAlive()) {
    //         plants[i].run()
    //     } else{
    //         plants.splice(i, 1);
    //     }
    // }
    // for (var i = 0; i < Agents.length; i++) {
    //     if (Agents[i].isAlive()) {
    //         Agents[i].run()
    //     } else{
    //         Agents.splice(i, 1);
    //     }
    // }

    flock.run();
    predators.run();
    flowfield.display();
    drawStats();

}

function drawStats (){
    textSize(11);
    text('Flock size: ' + flock.getSize(), 10,30);
    fill(0,102,53);
}


function mouseDragged() {
    var newMember = new Vehicle(mouseX, mouseY, 1)
    newMember.setFlowfield(flowfield);
    flock.addMember(newMember);
}
