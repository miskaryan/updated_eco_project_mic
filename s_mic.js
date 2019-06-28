var fc;
var rs;
var isLooping;
var k1=0;
var mic;
var smoothMicLevel = 0;
var button;
// var song;
// var amplitude;
var fallingBottles = false;
var showMessage = false;

function preload() {
    song = loadSound("audio/Earth-song.mp3");
    image1 = loadImage('world_map.png');
    imgBottle = loadImage('bottle.png');
}
function setup() {
    createCanvas(windowWidth - 600, windowHeight);
    
    background(0);
    noFill();
    rs = random(100);
   
    strokeCap(SQUARE);
    
    //amplitude = new p5.Amplitude();
    mic = new p5.AudioIn();
    mic.start();
    //song.play();
}
function togglePlay() {
    if (!song.isPlaying()){
        song.play();
        button.html("Pause");
    } else {
        song.pause();
        button.html("Play");
    }

}  
var k1 = 0, musicPlay = false;
var bottles =[];
var dx = 400, dy = -50, noloop1 = true;
var griText = false;



function draw() {
    toggleListen();
    
    background('#14133B');
    scale(0.7);

    //var vol = amplitude.getLevel();
    // var diam = map(vol, 0, 1, 10, height);

    for (i = 0; i < 3; i++) {
        arcs(width / 2 + dx, height / 2 + dy, height* .75);
    }
    micLevel = mic.getLevel();
    // console.log(micLevel);
    smoothMicLevel = lerp(smoothMicLevel, micLevel, 0.4);
    imageMode(CENTER);
    image(image1, width / 2 + dx, height / 2 + dy, 2000 * smoothMicLevel + 150, 1000 * smoothMicLevel + 75);
    //getDeafaultArcValues();
    //scale(1);


    // imageMode(CENTER);
    // image(image1, width / 2 + dx, height / 2 +dy, 2*diam+120, diam+60, 2000 * smoothMicLevel, 2000 * smoothMicLevel);
    //arc(width / 2 + dx, height / 2 + dy, diam, diam/2, 2000 * smoothMicLevel, 2000 * smoothMicLevel)
    scale(2);
    // console.log(frameCount);
    if (fallingBottles) {
        for(var i1 in bottles){
        bottles[i1].falling();
        //bottles[i1].collect();
    }
}
    if(frameCount % 10 == 0)
    bottles.push(new Bottle(random(-10,width), -random(height/4,height/2)));
// }

if(showMessage) {
    displayMessage();
}
    //song.setVolume(slider.value());

    //arcs(width/2, height/2, diam, diam);

}

function mousePressed() {
if (fallingBottles == false) {
    console.log("start bottles");
    fallingBottles = true;
    } else {
    console.log("stop bottles")
    fallingBottles = false
    showMessage = true;
    }
}

var r = 0;
var num = 5;
var sw = 30;
var start = 0;
var end = null;
var isThick = false;

function arcs(x, y, size) {
    push();
    translate(x, y);
    rotate(r);
    for (i = 0; i < num; i++) {
        sw = 30;
        strokeWeight(sw);
        if(isThick == false) {
            sw = (sw + 15) + (i * 29);
            strokeWeight(sw);
        }
        if(sw == 165) {
            isThick = true;
            sw = 30;
        }

        // 30, 45, 45+12, 57+18, 85+24, 109+30
        
        //console.log(sw);
        //stroke(360.0/num*i, 100, 100, 120);
        //lerpAmount = 1.0/num*i;
        // color col = lerpColor('#9E023B', '#FFC675', lerpAmount);
        // stroke(200, 220);
        stroke(360.0 / num * i, 100, 100, 120);
        start = start + (TWO_PI / 5);

        end = start + (TWO_PI / 5);
        // scal = map(sin(r+TWO_PI/num*i), -1, 1, .5, 1.5);
        arc(0, 0, size, size, start, end);
    }
    r += .0103/2;
    pop();
}
// function getDeafaultArcValues(){
//     r = 0;
//     num = 5;
//     sw = 30;
//     start = 0;
//     end = null;
// }


function toggleListen() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();   
    } 
}

function displayMessage(){
    background(0, k1++);if(k1 == 255)
    {
        background(255);
    }
    else if(k1 > 255){
   
        fill(67,101,156);
          
        textSize(37);
        text('Nature is a miracle that we all depend on.',120,300)
        fill(54,117,75);
        textSize(26);
        text('So try to avoid using plastics or for the beginning send them for recycling.', 50, 350)
}
}