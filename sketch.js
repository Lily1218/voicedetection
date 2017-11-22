var mic;
var con;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  mic = new p5.AudioIn();

  mic.start();
}

function draw() {
  background(18);   
  
  var vol = mic.getLevel();

  con = 100+vol*200;    
  noStroke();
  if(con<175){    
  fill(223,209,53,150);    
  ellipse(width/2,height/2,con); 
}else{
  fill('red');    
  ellipse(width/2,height/2,con);
  textSize(40); 
  textAlign(CENTER);  
  text('ATTENTION!',width/2,height/6);    
} 
  fill(223,209,53);
  noStroke();
  ellipse(width/2,height/2,100);    
  fill(255);
  textSize(20); 
  textAlign(CENTER);    
  text('voice',width/2,height/2);    
}