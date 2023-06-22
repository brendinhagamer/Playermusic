window.onload = () => {

    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

const audio_player = document.getElementById('music-player');

let current_song_index;
let next_song_index;

let songs = [
    {
        title: 'Yellow',
        artist: 'By Cold-Play',
        song_path:'music/m1.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'Paradise',
        artist: 'By Cold-Play',
        song_path: 'music/m2.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'Fix you',
        artist: 'By Cold-Play',
        song_path: 'music/m3.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'A Sky Full Of Stars',
        artist: 'By Cold-Play',
        song_path:'music/m4.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'Adventure Of A LifeTime',
        artist: 'By Cold-Play',
        song_path: 'music/m5.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'The Scientist',
        artist: 'By Cold-Play',
        song_path: 'music/m6.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'Higher Power',
        artist: 'By Cold-Play',
        song_path:'music/m7.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'In My Place',
        artist: 'By Cold-Play',
        song_path: 'music/m8.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'For you',
        artist: 'By Cold-Play',
        song_path: 'music/m9.mp3',
        img_path: './assets/images/ColdPlay.png'
    },
    {
        title: 'Clocks',
        artist: 'By Cold-Play',
        song_path: 'music/m10.mp3',
        img_path: './assets/images/ColdPlay.png'
    }

]

play_btn.addEventListener('click', TogglePlaySong);
next_btn.addEventListener('click', () => ChangeSong());
prev_btn.addEventListener('click', () => ChangeSong(false));

/* ação para iniciar o player */
InitPlayer();

function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
}

/* ação para atualizar o player */
function UpdatePlayer() {
    let song = songs[current_song_index];

    song_img_el.style = "background-image: url('" + song.img_path + "')";
    song_title_el.innerText = song.title;
    song_artist_el.innerText = song.artist;

    song_next_up_el.innerText = songs[next_song_index].title + " by " +  songs[next_song_index].artist;

    audio_player.src = song.song_path;
}

function TogglePlaySong() {
    if (audio_player.paused) {
        audio_player.play();
        play_btn_icon.classList.remove('fa-play');
        play_btn_icon.classList.add('fa-pause');
    } else {
        audio_player.pause();
        play_btn_icon.classList.add('fa-play');
        play_btn_icon.classList.remove('fa-pause');

    }
}

function ChangeSong (next = true ) {
    if (next) {
        current_song_index++;
        next_song_index = current_song_index +1;

        if (current_song_index > songs.length - 1) {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
        }

        if (next_song_index > songs.length - 1) {
            next_song_index = 0;
        }
    } else {
        current_song_index--;
        next_song_index = current_song_index + 1;

        if (current_song_index < 0) {
            current_song_index = songs.length - 1;
            next_song_index = 0;
        }

    }

    UpdatePlayer();
    TogglePlaySong();
}

}