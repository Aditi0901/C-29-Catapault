class SlingShot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    display(){
        image(this.sling1,200,70,30,150);
        image(this.sling2,180,65,30,90);
        if(this.sling.bodyA !== null){
         
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push();
        stroke(48,22,8);
        if(pointA.x<220){
        strokeWeight(8);
        line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x-25,pointA.y, pointB.x+30, pointB.y-3);
        image(this.sling3,pointA.x-30, pointA.y-10, 15,30);

        } else{
            strokeWeight(4);
        line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
        line(pointA.x+25,pointA.y, pointB.x+30, pointB.y-3);
        image(this.sling3,pointA.x+25, pointA.y-10, 15,30);
        }

        
        pop();
        }
    }
    fly(){
        Matter.Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:this.sling.pointB.x,y:this.sling.pointB.y});
        this.sling.bodyA = null;
        
    }
    
}