class Bob{
        constructor(x,y,diameter){
            var options = {
                isStatic:false,
                restitution:1,
                friction:0,
                density: 0.8
            }
            this.x = x;
            this.y = y;
            this.diameter = diameter;
            this.body = Bodies.circle(this.x,this.y,(this.diameter)/2,options);
            //this.image = loadImage ("SPRITES/paper (1).png")
            //this.diameter = 50;
            
            World.add(world,this.body) 
        }
    
        display(){
            var pos = this.body.position;
           // var angle = this.body.angle;
            
            push();
            translate(pos.x,pos.y);
            //rotate(angle);
           // rectMode(CENTER)
            //image(this.image,0,0,50,50);
            fill("blue");
            circle(0,0,this.diameter);
            //rect(0,0,this.width,this.height);
            pop();
        }
    }