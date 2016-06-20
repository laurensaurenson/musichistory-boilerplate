// var listView = document.getElementById("listMusic");
var songList = document.createElement("div");
// var addingMusic = document.getElementById("addMusicView");
// var viewMusic = document.getElementById("viewMusic"); 
var arrayObject;

function printingSongInfo () {
  for (var i = 0; i < arrayObject.songs.length; i ++) {
    writingInfo(i);
  }
} 

function writeNewSong (arrayObject) {
  var i = arrayObject.songs.length - 1;
  writingInfo(i);
}

function writingInfo (x) {
  var note = document.createElement("div");
  var song = document.createElement("h2");
  var songName = document.createTextNode(`${arrayObject.songs[x].title}`);
  var artist = document.createElement("p");
  var artistInfo = document.createTextNode(`${arrayObject.songs[x].artist} | ${arrayObject.songs[x].album} | ${arrayObject.songs[x].genre}`);
  var buttonDelete = document.createElement("button");
  var bDelete = document.createTextNode("Delete");
  compileSongNote(note, song, songName, artist, artistInfo, buttonDelete, bDelete);
}

function compileSongNote (note, song, songName, artist, artistInfo, buttonDelete, bDelete) {
  note.classList.add("songGroup");
  song.appendChild(songName);
  artist.appendChild(artistInfo);
  buttonDelete.appendChild(bDelete);
  buttonDelete.addEventListener("click", deleted);
  note.appendChild(song);
  note.appendChild(artist);
  note.appendChild(buttonDelete);
  note.classList.add("capitalize");
  songList.appendChild(note);
}

function loaded (  ) {
  arrayObject = JSON.parse(event.target.responseText);
  printingSongInfo();
}

function loadMore () {
  var moreSongs = new XMLHttpRequest();
  moreSongs.addEventListener("load", loaded);
  moreSongs.open("GET", "more.json");
  moreSongs.send();
  more.classList.add("hidden");
}

function addSongs () {
  var newSong = {};
  newSong.album = document.getElementById("albumName").value;
  newSong.artist = document.getElementById("artistName").value;
  newSong.genre = document.getElementById("genreName").value;
  newSong.title = document.getElementById("songName").value;
  arrayObject.songs.push(newSong);
  writeNewSong(arrayObject);
}

function deleted () {
  var cardToDelete = event.target.closest("div");
  songList.removeChild(cardToDelete);
}

// TO CREATE: if else statement for list view VS add view

function showAddMusic () {
  var addingMusic = document.getElementById("addMusicView");
  var viewMusic = document.getElementById("viewMusic");
  listMusic.classList.add("hidden");
  addingMusic.classList.remove("hidden");
}

function showViewMusic () {  
  var addingMusic = document.getElementById("addMusicView");
  var viewMusic = document.getElementById("viewMusic");
  addingMusic.classList.add("hidden");
  listMusic.classList.remove("hidden");
}


var container = document.getElementById("songs");
var more = document.createElement("button");
var moreSongs = document.createTextNode("More...");
more.classList.add("moreButton");
more.appendChild(moreSongs);
container.appendChild(songList);
container.appendChild(more);

var songInfo = new XMLHttpRequest();
songInfo.open("GET", "songs.json");
songInfo.send();

songInfo.addEventListener("load", loaded);
more.addEventListener("click" , loadMore );

addMusic.addEventListener("click", showAddMusic);
viewMusic.addEventListener("click", showViewMusic);

var addSong = document.getElementById("addSong");
addSong.addEventListener("click", addSongs);