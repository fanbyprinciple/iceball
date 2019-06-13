var bird;

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(400, 600);
    bird = new Bird()
}

function draw() {
    background(0);
    //text("put your p5.js code here",10, frameCount % height);
    bird.update()
    bird.show()
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (key == ' ') {
        bird.up()
        console.log('SPACE')
    }
}