left_wrist_X = 0;
right_wrist_X = 0;
difference= 0;

function setup(){
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(200,180);

    canvas= createCanvas(480,480);
    canvas.position(680,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotPoses)
}

function modelLoaded(){
console.log("Model Loaded :)");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    left_wrist_X = results[0].pose.leftWrist.x;
    right_wrist_X = results[0].pose.rightWrist.x;
    console.log("Left Wrist X = " + left_wrist_X+ "  Right Wrist X = "+right_wrist_X);
    difference = Math.floor(left_wrist_X - right_wrist_X);
    console.log("Difference Between left and right wrist= "+difference);
}
}

function draw() {
    background("#5c0938");
    textSize(difference);
    fill("#b724ed");
    text('Tejaswi',40,200);
    }
    