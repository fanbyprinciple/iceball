function Pipe(){

    this.spacing = 175
    this.top = random(height/6, .75 * height)
    this.bottom = height - (this.top + this.spacing)
    this.x = width;
    this.w = 40
    this.speed = 2

    this.highlight = false

    this.show = function() {
        fill(255)
        if (this.highlight){
            fill(0,0,255)
        }
        rect(this.x,0,this.w,this.top)
        rect(this.x,height-this.bottom, this.w, height)
    }

    this.update = function() {
        this.x -= this.speed 
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true
        } else {
            return false
        }
    }

    this.hits = function(iceball){
        if (iceball.y < this.top || iceball.y > height - this.bottom ){
            if(iceball.x > this.x && iceball.x < this.x + this.w){
                this.highlight = true
                return true
            } 
        } else {
            this.highlight = false
            return false
        }
    }
}