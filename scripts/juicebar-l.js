class Juicebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <div class="juice">
        <div class="headsup">
            <img src="/assets/img/homepage/Powerful_Hookset.png"> How did you reach this place?
        </div>
        <div id="minecraft" class="splashtext"></div>
        <div class="orchestrion">
            <span id="OrchestrionTitle"></span>
            <div class="orchestrion-controls">
                <button onclick="rewindMusic()"><i class="fa-solid fa-backward-step"></i></i></button>
                <button onclick="playPauseMusic()"><i class="fa-solid fa-play" id="playButton"></i></button>
                <button onclick="ChangesongPlay()"><i class="fa-solid fa-forward-step"></i></button>
                <label for="trackList" hidden>Music Track Picker:</label>
                <select id="trackList" onchange="ChangeSongTrackList()">
                    <option value="none" selected>Pick a song...</option>
                    <optgroup label="L">
                        <option value="3">You Should Not Be Here</option>
                    </optgroup>
                </select>
            </div>
            <audio id="OrchestrionTag" src=""></audio>
        </div>
    </div> 
      `;
    }
  }

  customElements.define('juice-block', Juicebar);


// built off of Nickolox's music player code... which is built off of Dokodemo's! 
// so credits to them both

window.addEventListener("load", ChangesongLoad, false)

const songs = {
    s1: {
        title: 'You Should Not Be Here',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Deltarune%20OST%20-%20ANOTHER%20HIM%20(In-Game%20Version).mp3'
    }
};


const songTitle = document.getElementById("OrchestrionTitle");
const songPlay = document.getElementById("OrchestrionTag");
const playButton = document.getElementById("playButton");

function ChangesongPlay() {
    songPlay.volume = 0.25;
    const SongList = Object.values(songs);
    const randomSong = SongList[Math.floor(Math.random() * SongList.length)];
    songTitle.innerHTML = "Now playing: " + randomSong.title;
    songPlay.src = randomSong.url;
    if(playButton.classList.contains("fa-pause") && !songPlay.paused){
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
    }
    else{
        playButton.classList.add("fa-pause");
        playButton.classList.remove("fa-play");
    }
}

function ChangesongLoad() {
    songPlay.volume = 0.25;
    const SongList = Object.values(songs);
    const randomSong = SongList[Math.floor(Math.random() * SongList.length)];
    songTitle.innerHTML = "Now playing: " + randomSong.title;
    songPlay.src = randomSong.url;
}

// === Persistent Music Patch ===
// Save current song info and playback time every second
setInterval(() => {
    if (songPlay && songPlay.src) {
        sessionStorage.setItem("currentSongSrc", songPlay.src);
        sessionStorage.setItem("currentSongTitle", songTitle.innerText);
        sessionStorage.setItem("currentTime", songPlay.currentTime);
    }
}, 1000);

// On page load, restore song state if present
window.addEventListener("DOMContentLoaded", () => {
    const savedSrc = sessionStorage.getItem("currentSongSrc");
    const savedTitle = sessionStorage.getItem("currentSongTitle");
    const savedTime = parseFloat(sessionStorage.getItem("currentTime") || "0");

    if (savedSrc && savedTitle) {
        songPlay.src = savedSrc;
        songTitle.innerText = savedTitle;
        songPlay.volume = 0.25;
        songPlay.currentTime = savedTime || 0;
        // Start with play icon (don't autoplay)
        playButton.classList.add("fa-play");
        playButton.classList.remove("fa-pause");
    } else {
        ChangesongLoad(); // Initialize a new song if no saved state
        playButton.classList.add("fa-play"); // Start with play icon
    }
});

function ChangeSongTrackList() {
    const x = document.getElementById("trackList").value;
    const SongList = Object.values(songs);
    if (x == "None") {
        // This just gets the console to stop having a whinge about the "Pick a track" option
    } else {
        const newSong = SongList[x];
        songTitle.innerHTML = "Now playing: " + newSong.title;
        songPlay.src = newSong.url;
        if(playButton.classList.contains("fa-pause") && !songPlay.paused){
            playButton.classList.remove("fa-pause");
            playButton.classList.add("fa-play");
        }
        else{
            playButton.classList.add("fa-pause");
            playButton.classList.remove("fa-play");
        }
    }
}

songPlay.onended = function () {
    ChangesongPlay();
};

function playPauseMusic(){
    if (!songPlay.paused) {
        // If already playing, pause it
        songPlay.pause();
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
    } else {
        // If paused, try to play
        songPlay.play().then(() => {
            playButton.classList.add("fa-pause");
            playButton.classList.remove("fa-play");
        }).catch((e) => {
            console.error("Playback failed:", e);
            // Optional: Show a message to the user
            alert("Click play again to start playback (browser restriction)");
        });
    }
}

function rewindMusic() {
    songPlay.currentTime = 0;
}


  var quote = [],
  index = 0;
  quote[0] = "<h3>You should not be here.</h3>";
  quote[1] = "<h3>You should not be here.</h3>";
  quote[2] = "<h3>You should not be here.</h3>";
  quote[3] = "<h3>You should not be here.</h3>";
  quote[4] = "<h3>You should not be here.</h3>";
  quote[5] = "<h3>You should not be here.</h3>";
  quote[6] = "<h3>You should not be here.</h3>";
  quote[7] = "<h3>You should not be here.</h3>";
  quote[8] = "<h3>You should not be here.</h3>";
  quote[9] = "<h3>You should not be here.</h3>";
  quote[10] = "<h3>You should not be here.</h3>";
  quote[11] = "<h3>You should not be here.</h3>";
  quote[12] = "<h3>You should not be here.</h3>";
  
  function choosequote() {
  let randomNum = Math.floor(Math.random() * quote.length);
  document.getElementById("minecraft").innerHTML = quote[randomNum];
  }
  window.addEventListener("load",choosequote, false)