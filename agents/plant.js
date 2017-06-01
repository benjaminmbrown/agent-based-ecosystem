function Plant(x,y){
	Agent.call(this, x, y);
    Plant.prototype = Object.create(Agent.prototype);
    Plant.prototype.constructor = Plant;
    
}