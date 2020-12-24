var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var ground ,yellowL;
var score = 0 ; 
var turn = 0 ; 

var gameState = "play";

var particle  ;
var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  yellowL = new Yl(width/2,650,width,10);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,600);//80
  text("500",100,600);//160
  text("500",180,600);//240
  text("100",260,600);//320
  text("100",340,600);//400
  text("100",420,600);//480
  text("100",500,600);//560
  text("500",580,600);//630
  text("500",660,600);//720
  text("500",740,600);//800
  text("Turn : "+turn,20,60);
  yellowL.display();
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   } 
   if(particle!=null){
    particle.display();

   if(particle.body.position.y>545 ){
      if(particle.body.position.x <240 && particle.body.position.x >0){
        score = score+500;
        particle = null;
        if(turn>= 5) gameState ="end";
      }
    
      
    }
    if(particle!=null){
      particle.display();
      if(particle.body.position.y>545 ){
      if(particle.body.position.x >630 && particle.body.position.x <800){
        score = score+500;
        particle = null;
        if(turn>= 5) gameState ="end";
      }
    }
    }
    if(particle!=null){
      particle.display();
      if(particle.body.position.y>545 ){
        if(particle.body.position.x >320 && particle.body.position.x <560){
          score = score+100;
          particle = null;
          if(turn>= 5) gameState ="end";
        }
    }
    }

    
  
  }
   
/*   if(frameCount%60===0 && gameState === "play"){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
    turn = turn + 1;
    }*/
 if ( turn === 5){
   textSize(30);
   gameState ="end";
 }
/*  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
  if(gameState === "end"){
    text("Game Over",400,200);
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   
   

}
function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10)

  }
 
}