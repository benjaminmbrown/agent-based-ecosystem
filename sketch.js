var agents = new Agents;

function setup() {
    createCanvas(400, 300);
    setFrameRate(60);

}
function draw() {
    background(255);
    if (agents.hasMembers()) {
        agents.run();
    }
}
function mousePressed() {
    addAgent();
}
function mouseDragged() {
    addAgent();
}
function addAgent() {
    var agent = new Plant({
        x: mouseX,
        y: mouseY
    });
    agents.addMember(agent);
    agent.on("transition", function (data) {
        console.log(data ,"transitioned from " + data.fromState + " to " + data.toState);
    });
    agent.spawn();
}