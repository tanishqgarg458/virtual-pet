// Tanishq
//Create variables here
var di1,di2;
var database;
var dog,dogImg,dogImg1;

var foodS,foodStock;
function preload()
{
	di1=loadImage("images/dogImg.png");
  di2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  dog=createSprite(250,300,150,150);
  dog.addImage(di1);
  dog.scale=0.15;
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(di2)
}
 
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}


