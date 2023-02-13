leftWristX = 0;
rightWristX = 0;
fontSize = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(250, 250);
    canvas = createCanvas(500, 400);
    canvas.position(800, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){ 
    background("#1C2833");
    textSize(fontSize);
    fill("#A93226");
    text("Messi Is The Greatest Of All Time", 10, 200);
}

function modelLoaded(){
    console.log('Posenet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log('Left Wrist X  = ' + leftWristX + 'Right Wrist X  = ' + rightWristX);
        fontSize = Math.floor(leftWristX - rightWristX);
    }
}