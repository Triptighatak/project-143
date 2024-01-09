function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0,0,600, 500);
}
if (scoreLeftWrist > 0.2) {
        cicle(leftWristX, leftWristY, 20);
        a = Number(leftWristY);
        b = floor(a);
        volume = b / 500;
        document.getElementById("volume").innerHTML = "Volume=" + volume;
        song.setVolume(volume);
    }

song = "";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
song1Status="";
song2Status="";

function preload() {
    song = loadSound("b.mp3");
    song2=loadSound("music.mp3");
}


function modelLoaded(){
    console.log('PoseNet is iniatialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}
