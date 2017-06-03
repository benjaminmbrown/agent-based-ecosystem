var Agents = function () {
    this.members = [];
    this.run = function () {
        _.each(this.members, function (member, i) {
            if (member.isAlive) {
                member.run();
            }
        })
    }

    this.addMember = function (agent) {
        this.members.push(agent);
    }

    this.hasMembers = function () {
        return (this.members.length > 0) ? true : false;
    }


}