var Agent = machina.Fsm.extend({
    initialize: function (options) {
        this.position = createVector(options.x, options.y);
        this.c = color(0, 0, 0,155);
        this.mass = 5;
        this.isAlive = true;
    },
    namespace: "Agent",
    initialState: "uninitialized",
    states: {
        uninitialized: {
            "*": function () {
                console.log("uninit");
                this.deferUntilTransition();
                this.transition("spawning");
            }
        },
        spawning: {
            _onEnter: function () {
                console.log('spawning')
                this.alpha =120;
                this.mass = 10;
                this.c = color(120, 120, 120);
                this.timer = setTimeout(function () {
                    this.handle("timeout");
                }.bind(this), 2000);
                this.emit("agents", {
                    status: "SPAWNING"
                });
            },
            timeout: "living",
            _onExit: function () {
                clearTimeout(this.timer);
            }
        },
        living: {
            _onEnter: function () {
               this.alpha = 255;
               this.mass = 20;
                  this.c = color(0, 255, 0);
                this.timer = setTimeout(function () {
                    this.handle("timeout");
                }.bind(this), 2000);

                this.emit("agents", {
                    status: "LIVING"
                });
            },
            timeout: "dying",
            _onExit: function () {
                clearTimeout(this.timer);
            },
        },
        dying: {
            _onEnter: function () {
                    this.alpha = 120;
                    this.mass = 20; 
                  this.c = color(255, 255, 0);
                this.timer = setTimeout(function () {
                    this.handle("timeout");
                }.bind(this), 2000);
                this.emit("agents", {
                    status: "DYING"
                })
            },
            timeout: 'dead',
            _onExit: function () {
                clearTimeout(this.timer);
            }
        },
        dead: {
            _onEnter: function () {
                this.mass = 0;
                this.isAlive = false;
            }
        }
    },
    reset: function () {
        this.handle("_reset")
    },
    spawn: function () {
        this.handle("spawning");
    },
    update: function (){},
    run: function(){
        this.update();
        this.display();
    },
    display: function () {
        stroke(this.c, this.alpha); //gets more transparent as it dies
        strokeWeight(2);
        fill(this.c, this.alpha);
        ellipse(this.position.x, this.position.y, this.mass, this.mass);
    }, 
    isAlive: function(){
        return this.isAlive;
    }
})