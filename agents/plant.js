var Plant = Agent.extend({
    initialize: function (options) {
        this.position = createVector(options.x, options.y);
        this.c = color(255, 0, 255);
    },
    namespace: "Plant",
    initialState: "uninitialized",

})


// function Plant(x,y){
// 	Agent.call(this, x, y);
//     Plant.prototype = Object.create(Agent.prototype);
//     Plant.prototype.constructor = Plant;

// }