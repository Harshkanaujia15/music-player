let song = document.getElementById("song");
let progress = document.getElementById("progress");
let controls = document.getElementById("controls");
let song2 = document.getElementById("song2")
let back= document.getElementById("backward")
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playpause() {
  if(controls.classList.contains("fa-pause")){
    song.pause();
    controls.classList.remove("fa-pause");
  controls.classList.add("fa-play");
} else{
  song.play();
  controls.classList.add("fa-pause");
  controls.classList.remove("fa-play");
}
  }

if(song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  },400);
}
progress.onchange = function () {
  song.currentTime = progress.value;
  controls.classList.add("fa-pause"); 
  controls.classList.remove("fa-play");
}
song2.onloadedmetadata = function(){
  progress.max = song2.durtion;
  progress.value = song2.currentTime;
}



