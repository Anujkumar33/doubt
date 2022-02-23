class Ground 
{
    constructor(x,y,w,h){
     let options ={
         isStatic:true
     };
    this.body=bodies.rectangle(x,y,w,h,options);
     this.x=x;
     this.y=y;
     this.w=w=200;
     this.h=h;
     World.add(world,this.body);
    }

    display() 
    {
        var pos=this.position.body;
        push()
        rectMode(CENTER);
        stoke(255);
        fill(177);
        rect(pos.x,pos.y,this.w,this.h);

    }
}