noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    canvas=createCanvas(450, 450);
    canvas.position(700, 100);
    video=createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100 );

    //INITIALIZING POSENET MODEL
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("POSENET MODEL HAS BEEN SUCCESSFULLY LOADED")
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result)
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log(noseX, noseY);
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        console.log(leftWristX, rightWristX);
        difference=floor(leftWristX-rightWristX)
        console.log(difference);
    }
}

function draw() {
    background("grey");
    stroke("black");
    square(noseX, noseY, difference);
    fill("aqua");
    document.getElementById("square_side").innerHTML="The side of the is " + difference;
}