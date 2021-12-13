objects= [];

img="";

status= "";

function preload(){
    img= loadImage('dog_cat.jpg');
}

function setup(){
    canvas= createCanvas(640 , 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML= "status:Detecting Object";
}

function modelLoaded(){
    console.log("modelLoaded");
    status= true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects= results;
}

function draw(){
    image(img , 0 , 0 , 640 , 420);
    if(status!=""){
    for(i=0 ; i<objects.length ; i++){
    document.getElementById("status").innerHTML= "Status:Object Detected"
    fill("#FF0000");
    percent= floor(objects[i].confidence*100);
    text(objects[i].label + " " + percent + "%" , objects[i].x + 100 , objects[i].y , 100 , 50);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height); 
    }

    }
    //fill("#FF0000");
    //text("Dog" , 200 , 50);
    //noFill();
    //stroke("#FF0000");
    //rect(100 , 50 , 300 , 350); 

    //fill("#0000FF");
    //text("Cat" , 500 , 50);
    //noFill();
    //stroke("#0000FF");
    //rect(300 , 55 , 300 , 350);
}