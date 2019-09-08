


// PANDORAS BOX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Particle {
    constructor(origin) {
        this.origin = origin;
        this.init();

    }
    init() {
        this.position = createVector(this.origin.x, this.origin.y);
        this.velocity = p5.Vector.fromAngle(random(0, TWO_PI)).mult(random(0.1, 2));
        this.acc = createVector(0, 0);
        this.size = random(10, 80);
        this.wiggle_speed = map(this.size, 20, 80, 0.4, 0.1);
        this.wiggle_factor = map(this.size, 20, 80, 0.2, 16);
        this.lift = createVector(0, -random(0.001, 0.04));
        this.duration = random(10, 200);
        this.start = frameCount;
        this.random_index = random(0, 100);
        this.max_opacity = random(10, 100);
        this.max_speed = random(4, 10);
        // trail
        this.trail = [];
        let trail_length = floor(random(6, 40));
        for (let i = 0; i < trail_length; i++) {
            this.trail.push({
                x: this.position.x,
                y: this.position.y,
                start: frameCount - i,
                duration: trail_length - 1
            });
        }

    }
    display(index) {
        //
        let current = frameCount - this.start;
        // Apply Forces
        this.addForce(this.lift);
        //
        this.velocity.add(this.acc);
        this.velocity.limit(this.max_speed);
        this.position.add(this.velocity);
        this.acc.mult(0);
        // Wiggle
        let angle = this.velocity.heading() + Math.PI / 2;
        let wiggle = Math.sin((this.random_index + frameCount) * this.wiggle_speed) * this.wiggle_factor;
        wiggle *= map(this.velocity.mag(), 0, this.max_speed * 0.4, 0.2, 1);
        let w_x = this.position.x + Math.cos(angle) * wiggle,
            w_y = this.position.y + Math.sin(angle) * wiggle;
        let size_percent;
        if (this.duration - current < this.duration * 0.5) {
            size_percent = map(constrain(this.duration - current, 0, this.duration), 0, this.duration, 0, 1);
        } else {
            size_percent = map(constrain(this.duration - current, 0, this.duration), 0, this.duration, 1, 0);
        }


        if (current > this.duration) {
            this.init();
        } else {
            let c = color(
                map(this.velocity.mag(), 0, this.max_speed, 200, 0),
                180, 255, map(this.velocity.mag(), 0, this.max_speed, 0, this.max_opacity)
            );
            fill(c);


            this.trail.forEach(t => {
                let c = frameCount - t.start;
                if (c > t.duration) {
                    t.x = w_x;
                    t.y = w_y;
                    t.start = frameCount;
                }
                let decay = map(constrain(t.duration - c, 0, t.duration), 0, t.duration, 0, 1);
                circle(t.x, t.y, this.size * decay * size_percent);
            });
        }
    }
    addForce(vector) {
        this.acc.add(vector);
    }
}

let p_stock = [];
let gravity, origin;

function setup() {
    createCanvas(480, 480);
    origin = createVector(width / 2, height * 0.8);
    gravity = createVector(0, 0.2);
    for (let i = 0; i < 140; i++) {
        p_stock.push(new Particle(origin));
    }
    colorMode(HSB, 255);
    noStroke();

}

function draw() {
    blendMode(BLEND);

    background(0, 60);
    blendMode(ADD);

    p_stock.forEach((p, index) => {
        p.display(index);
    });
}
