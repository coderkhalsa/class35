var hypnoticBall, database;
var position;
var gameState = 0, playerCount=0
var form,player,game                                                    

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game= new Game()
game.getState()
game.start()

 
}

function draw(){
  
    
}



