var Flock = function() {
   
	this.members = [];

	this.run = function(){
		_.each(this.members, function(member){ 
			member.run(this.flock); 
		})
	}

	this.addMember = function(agent){
		this.members.push(agent);
	}
	this.removeMember = function(agent){
		//TODO remove agent from flock
	}

	this.setFlowfieldForMembers = function(flowfield){
		_.each(this.members, function(member){
			member.setFlowfield(flowfield);
		})
	}
	// SETTTERS/GETTTERS

	this.getSize = function(){
		return this.members.length;
	}

	this.getCohesionForce = function (){
		return this.cohesionForce;
	}

	this.getSeparationForce = function (){
		return this.separationFoce;
	}

	this.getAlignmentForce = function (){
		return this.alignmentForce;
	}
	
	this.setCohesionForce = function (force){
		this.cohesionForce = force;
	}

	this.setSeparationForce = function (force){
		this.separationForce  = force;
	}
	
	this.setAlignmentForce = function (force){
		this.alignmentForce  = force;
	}
}


//_.extend(Flock.prototype, flockBehaviors);
