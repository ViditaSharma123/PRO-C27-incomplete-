class Bob{ 
  
    constructor(x, y, diameter,options) { 
      
      var options = { 
        isStatic: false, 
        restitution:1, 
        friction:1.0, 
        density:1.5
      } 
      this.width = width; 
      this.height = height; 
      this.radius = diameter / 2; 
      this.body = Bodies.circle(x,y,this.radius, options); 
      World.add(world, this.body); 
    } 
    
    display(){ 
      var pos = this.body.position; 
      push(); 
      translate(pos.x, pos.y); 
      //ellipseMode(RADIUS); 
      fill(255); 
      ellipse(0,0,this.radius, this.radius); 
      pop(); 
    } 
  }
  