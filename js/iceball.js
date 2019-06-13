function Iceball() {
    this.y = height/2
    this.x = 64
    this.gravity = 0.7
    this.velocity = 0
    this.lift = -12
    this.bouyancy = 0.8

    this.show = function() {
        fill(255)
        ellipse(this.x, this.y, 32, 32)
    }

    this.up = function() {
        this.velocity += this.lift
        //this.velocity *= this.bouyancy
    }

    this.update = function() {
        this.velocity += this.gravity
        this.y  += this.velocity;

        if(this.y > height){
            this.y = height
            this.velocity = 0
        }

        if(this.y < 0){
            this.y = 0
            this.velocity = 0
        }
    }
}