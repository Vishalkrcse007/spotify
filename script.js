console.log("welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gift=document.getElementById('gift');
let songhai=Array.from(document.getElementsByClassName('songItems'));


let songs=[
    {songName:"gana1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"gana2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"gana3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"gana4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"gana5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"gana6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"gana7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"gana8",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"gana9",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"gana10",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songhai.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
    
    
})


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gift.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gift.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progress;
    
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})


const makeAllPlays  = ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');


    })
    
}
Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        mastersongname.innerText=songs[songIndex].songName;
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gift.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    })

    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=0;
        }
        else{
            songIndex -=1;
        }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-pause-circle');
        })
    
        