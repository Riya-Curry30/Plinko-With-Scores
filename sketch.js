const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle;
var divisions = [];
var turn = 0;
var gameState = "start";
//var division1;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //ground1 = new Ground(400,500,800,10);



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

    Engine.run(engine);

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
 
  if(turn >= 5)
{
  gameState = "end";
}

  if(gameState != "start")
  {
    textSize(40);
    fill("red");
    text("Game Over", 350,400);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   
   }
*/
   //mousePressed();

   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y > 760)
     {
        if(particle.body.position.x < 280)
       {
         score = score + 500;
         particle = null;
       }

       else if(particle.body.position.x > 281 && particle.body.position.x < 520)
       {
         score = score + 100;
         particle = null;
       }

       else if(particle.body.position.x > 521 && particle.body.position.x < 760)
       {
         score = score + 200;
         particle = null;
       }
     }
   }

   

   for(var k = 0; k < divisions.length; k++)
   {
     divisions[k].display();
   }

  //particle = null;

   //sground1.display();

   textSize(24);

   text("Score: " + score, 20,30);
   text("500", 20,550);
   text("500",100,550);
   text("500", 180, 550);
   text("500", 260, 550);
   text("100", 340, 550);
   text("100", 420,550);
   text("100", 500,550);
   text("200", 580,550);
   text("200", 660, 550);
   text("200", 740, 550);
}

function mousePressed()
{
  if(gameState !== "end")
  {
    turn++;
    particle = new Particle(mouseX, 10,10,10);
  }
}


