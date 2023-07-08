console.log("Welcome to Tarang");
let songIndex = 1;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname: "Meri awaaz hi pehchan hai",filepath :"C:\Users\Shruti Verma\Documents\Tarang\song1.mp3",coverpath:"C:\Users\Shruti Verma\Documents\Tarang\awaaz.jpg"},
    {songname: "Haal kaisa hai janab ka",filepath :"C:\Users\Shruti Verma\Documents\Tarang\song2.mp3",coverpath:"C:\Users\Shruti Verma\Documents\Tarang\haal (2).jpg"},
    {songname: "Jaane wo kaise log they",filepath :"C:\Users\Shruti Verma\Documents\Tarang\song3.mp3",coverpath:"C:\Users\Shruti Verma\Documents\Tarang\jaane.jpg"},
    {songname: "Meri geet amar kar do",filepath :"C:\Users\Shruti Verma\Documents\Tarang\song4.mp3",coverpath:"C:\Users\Shruti Verma\Documents\Tarang\hothon.jpg"},
    {songname: "Yeh shaam mastani",filepath :"C:\Users\Shruti Verma\Documents\Tarang\song5.mp3",coverpath: "C:\Users\Shruti Verma\Documents\Tarang\shaam.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//listen to events
document.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song${songIndex}.mp3`;

        masterSongName.innerText = songs[songIndex-1].songname;
        audioElement.currentTime = 0;
        audioElement.play();
     
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})