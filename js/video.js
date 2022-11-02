const videoPlayer=document.querySelector('.what-video')
const video=videoPlayer.querySelector('.video')
const play=videoPlayer.querySelector('.play-button')
const icon=videoPlayer.querySelector('.fa-play')
const control=videoPlayer.querySelector('.player-controls')

play.addEventListener('click',(e)=>{
    if (video.paused){
        video.play()
        e.target.textContext="⏸️"
        icon.classList.remove('fa-play')
        icon.classList.add('fa-pause')
        control.style.opacity="0.5"
    }else{
        video.pause()
        e.target.textContext="▶️"
        icon.classList.remove('fa-pause')
        icon.classList.add('fa-play')
        control.style.opacity="1"
    }
})
function myFunction() {
    var mobMenu = document.getElementById("mobMenu");
    if (mobMenu.style.display === "block") {
      mobMenu.style.display = "none";
    } else {
      mobMenu.style.display = "block";
    }
}