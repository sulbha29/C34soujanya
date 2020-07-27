//Create variables here
var doggy,database,food,foodstock,image1,image2;
function preload()
{
  image1=loadImage("images/Dog.png");
  image2=loadImage("images/happydog.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  doggy=createSprite(250,250,10,10);
  doggy.addImage(image1);
  doggy.scale=0.2;
 
 foodstock=database.ref('Food');
  foodstock.on("value",readStock,showError);
}

function readStock(data){
  food=data.val();

  }


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(food);
  doggy.addImage(image2);
 
}
drawSprites();
textSize(20);
fill("red");
text("Press Up arrow to feed the doggy milk",100,100);
text(food,50,150);

  //add styles here
}

function writeStock(x){
 
  
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').set({
    Food:x
  })
}
function showError(){
  console.log("there is an error");
}