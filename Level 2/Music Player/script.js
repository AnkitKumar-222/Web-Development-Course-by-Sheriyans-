var arr = [
    { songName: "jale 2", url: "./songs/song1.mp3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaeaFGbjRG4UiRlAfvkhWrTYdfdPeKjgShxfObHRChQ&s=10" },
    { songName: "Pehle Bhi main", url: "./songs/song2.mp3", img: "https://i.pinimg.com/474x/66/83/6a/66836a47eed2f603f06bf39138c02d77.jpg" },
    { songName: "Ram siya ram", url: "./songs/song3.mp3", img: "https://c.saavncdn.com/709/Ram-Siya-Ram-Hindi-2023-20230831120504-500x500.jpg" },
    { songName: "Arjan Valley", url: "./songs/song4.mp3", img: "https://i.pinimg.com/474x/c6/3c/87/c63c87a72a253d08c4008d608758572e.jpg" }
]
var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")



var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})

