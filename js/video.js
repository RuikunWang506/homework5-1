// Add js here.
var video = document.getElementById("videoplayer");
// load video
video.load();
function videplay(evt) {
    video.play();
}
function videpause(evt) {
    video.pause();
}
// change volume
function videslider(evt) {
    var val = document.getElementById("slider").value;
    //Change the volume and update according to the slider
    video.volume = val / 100;
    //Displays the current volume
    document.getElementById("volume").innerHTML = val + '%';

}

// skip forward, backward, or restart
function setTime(tValue) {
    if (tValue == 0) {
        video.currentTime = tValue;
    }
    else {
        //If you exceed the video length, go back to the beginning.
        if (video.currentTime + tValue >= video.duration) {
            video.currentTime = 0;
        }
        video.currentTime += tValue;

    }

}

document.getElementById("play").addEventListener("click", videplay, false);

document.getElementById("pause").addEventListener("click", videpause, false);

// playback speed buttons
document.getElementById("slower").addEventListener("click", function () {
    if(video.playbackRate==0.5){
        alert("Video is at slowest speed!");
    }else{
        video.playbackRate -= .5;
    }
  
}, false);
document.getElementById("faster").addEventListener("click", function () {
    if(video.playbackRate==2){
        alert("Video is at fastest speed!");
    }else{
        video.playbackRate += .5;
    }

    
}, false);

// Skip forward 15 seconds
document.getElementById("skip").addEventListener("click", function () {
    setTime(15);
}, false);

//Mute/unmute the video and update the text in the button
document.getElementById("mute").addEventListener("click", function (evt) {
    if (video.muted) {
        video.muted = false;
        evt.target.innerHTML = "Mute"
    } else {
        video.muted = true;
        evt.target.innerHTML = "Unmute"
    }
}, false);

//Change the volume and update according to the slider
document.getElementById("slider").addEventListener("change", videslider, false);