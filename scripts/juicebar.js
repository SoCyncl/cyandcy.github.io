class Juicebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    <div class="juice">
        <div class="headsup">
            <img src="/assets/img/homepage/Powerful_Hookset.png"> This site uses javascript!
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
                    <optgroup label="Elden Ring Night Reign">
                        <option value="3">Adel, Baron Of Night - Elden Ring Nightreign</option>
                        <option value="4">Gladius, Beast Of Night - Elden Ring Nightreign</option>
                        <option value="5">Heolstor the Nightlord - Elden Ring Nightreign</option>
                        <option value="6">Caligo, Miasma Of Night - Elden Ring Nightreign</option>
                        <option value="7">Libra, Creature Of Night - Elden Ring Nightreign</option>
                        <option value="8">Fulghor, Champion Of Nightglow - Elden Ring Nightreign</option>
                        <option value="9">Maris, Fathom Of Night - Elden Ring Nightreign</option>
                        <option value="10">Gnoster, Wisdom Of Night - Elden Ring Nightreign</option>                        
                    </optgroup>
                    <optgroup label="Final Fantasy">

                        <option value="11">Beyond the Darkness - FFX</option>
                        <option value="12">Full Fathom Five - FFXIV</option>
                        <option value="18">Starless Skyline - FFXIV</option>
                        <option value="13">Galdin Quay - FFXV</option>
                        <option value="14">Hammerhead - FFXV</option>
                    </optgroup>
                    <optgroup label="RPG Maker">
                        <option value="15">Lost Haven/Shillings - Fear and Hunger 2: Termina</option>
                        <option value="16">Every Schoolday - Fear and Hunger</option>
                        <option value="17">A Stab of Happiness - OFF</option>
                    </optgroup>
                    <optgroup label="Kirby">
                        <option value="0">Ripple Field 2 - Kirby's Dreamland 3</option>
                        <option value="1">Grassland 4 - Kirby's Dreamland 3</option>
                        <option value="2">Friends 3 - Kirby's Dreamland 3</option>
                    </optgroup>
                </select>
            </div>
            <audio id="OrchestrionTag" src="" autoplay></audio>
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
        title: 'Ripple Field 2 - Kirby\'s Dreamland 3',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/ripplefield2.mp3'
    },
    s2: {
        title: 'Grassland 4 - Kirby\'s Dreamland 3',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/grassland4.mp3'
    },
    s3: {
        title: 'Friends 3 - Kirby\'s Dreamland 3',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/friends3.mp3'
    },
    s4: {
        title: 'Adel, Baron Of Night - Elden Ring Nightreign',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Adel%2C%20Baron%20Of%20Night%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },
    s5: {
        title: 'Gladius, Beast Of Night - Elden Ring Nightreign',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Gladius%2C%20Beast%20Of%20Night%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },
    s6: {
        title: 'Heolstor the Nightlord - Elden Ring Nightreign',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Heolstor%20the%20Nightlord%20-%20Elden%20Ring%20Nightreign%20OST.mp3'
    },
    s7: {
        title: "Caligo, Miasma Of Night - Elden Ring Nightreign",
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Caligo%2C%20Miasma%20Of%20Night%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },
    s8: {
        title: "Libra, Creature Of Night - Elden Ring Nightreign",
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Libra%2C%20Creature%20Of%20Night%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },
    s9: {
        title: 'Fulghor, Champion Of Nightglow - Elden Ring Nightreign',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Fulghor%2C%20Champion%20Of%20Nightglow%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },
    s10: {
        title: 'Maris, Fathom Of Night - Elden Ring Nightreign',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Maris%2C%20Fathom%20Of%20Night%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },

    s11: {
        title: 'Gnoster, Wisdom Of Night - Elden Ring Nightreign',
        url: 'https://file.garden/aE4BmvQeoiKwc59V/Fromsoft/Gnoster%2C%20Wisdom%20Of%20Night%20-%20Elden%20Ring%20Nightreign%20OST%20Official%20Soundtrack%20Original%20Score.mp3'
    },

    s12: {
        title: 'Beyond the Darkness - FFX',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/beyondthedarkness.mp3'
    },

    s13: {
        title: 'Full Fathom Five - FFXIV',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/fullfathomfive.mp3'
    },

    s14: {
        title: 'Galdin Quay - FFXV',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/galdinquay.mp3'
    },

    s15: {
        title: 'Hammerhead - FFXV',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/hammerhead.mp3'
    },

    s16: {
        title: 'Lost Haven/Shillings - Fear and Hunger 2: Termina',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/losthavenshillings.mp3'
    },

    s17: {
        title: 'Every Schoolday - Fear and Hunger',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/everyschoolday.mp3'
    },

    s18: {
        title: 'A Stab of Happiness - OFF',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/astabofhappiness.mp3'
    },

    s19: {
        title: 'Starless Skyline - FFXIV',
        url: 'https://file.garden/ZRqB-G_MomIqlqQI/music/Starless%20Skyline.mp3'
    },
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
    songPlay.pause();
    
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
        songPlay.play().catch(e => console.warn("Autoplay failed:", e));
        playButton.classList.add("fa-pause");
        playButton.classList.remove("fa-play");
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
    if(playButton.classList.contains("fa-pause")){
        songPlay.pause();
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
    }
    else{
        songPlay.play()
        playButton.classList.add("fa-pause");
        playButton.classList.remove("fa-play");
    }
}

function rewindMusic() {
    songPlay.currentTime = 0;
}


  var quote = [],
  index = 0;
  quote[0] = "<h3>AWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW</h3>";
  quote[1] = "<h3>Fuck this guy</h3>";
  quote[2] = "<h3>Rest in peace Carriage Kin</h3>";
  quote[3] = "<h3>She obsidian on my crystalis intil i Vitrik</h3>";
  quote[4] = "<h3>PAN-DE-MO-NI-UM</h3>";
  quote[5] = "<h3>Glint removed</h3>";
  quote[6] = "<h3>Quilliam doesn't love you</h3>";
  quote[7] = "<h4>Lab grown plasmoids are unethical.</h4>";
  quote[8] = "<h3>Merry Edel</h3>";
  quote[9] = "<h4>in the Shroud of Aurum straight up \"shrouding it\". and by \"it\", haha, well. let's justr say. My metalr</h4>";
  quote[10] = "<h3>When you give a Mousse an Edelith Pod...</h3>";
  quote[11] = "<h3>I forgot what I was going to say.</h3>";
  quote[12] = "<h4>RIP Blobert 2024-2025</h4>";
  
  function choosequote() {
  let randomNum = Math.floor(Math.random() * quote.length);
  document.getElementById("minecraft").innerHTML = quote[randomNum];
  }
  window.addEventListener("load",choosequote, false)