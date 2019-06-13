var Iceball
var pipes = []

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(400, 600);
    Iceball = new Iceball()
    pipes.push(new Pipe())

    
}

function draw() {
    background(0);

    for (var i= pipes.length -1 ; i >= 0; i--){
        pipes[i].show()
        pipes[i].update()

        if(pipes[i].hits(iceball)){
            console.log("HIT")
        } 

        if(pipes[i].offscreen()){
            pipes.splice(i,1)
        }

        
    }

    //text("put your p5.js code here",10, frameCount % height);
    Iceball.update()
    Iceball.show()

    if (frameCount % 100 == 0){
        pipes.push(new Pipe())
    }

    
    
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (key == ' ') {
        Iceball.up()
        console.log('SPACE')
    }
}