var arrayObject;
var songList = $("<div>");
var container = $("#songs");
var more = $("<button>").html("More...").addClass("moreButton");
container.append(songList);
container.append(more);

function printingSongInfo () {
  for (var i = 0; i < arrayObject.length; i ++) {
    writingInfo(i);
  }
} 

function writeNewSong (arrayObject) {
  var i = arrayObject.length - 1;
  writingInfo(i);
}

function writingInfo (x) {
  var note = $("<div>");
  var song = $("<h2>").html(`${arrayObject[x].title}`);
  var artist = $("<p>").html(`${arrayObject[x].artist} | ${arrayObject[x].album} | ${arrayObject[x].genre}`);
  var buttonDelete = $("<button>").html("Delete");
  compileSongNote(note, song, artist, buttonDelete);
}

function compileSongNote (note, song, artist, buttonDelete) {
  buttonDelete.click(deleted);
  note.append(song).append(artist).append(buttonDelete).addClass("songGroup capitalize");
  songList.append(note);
}

function loaded ( data ) {
  arrayObject = data.songs;
  printingSongInfo();
}

function loadMore () {
  $.ajax({
    url:"more.json"
  }).done(loaded);
  more.addClass("hidden");
}

function addSongs () {
  var newSong = {};
  newSong.album = $("#albumName").val();
  newSong.artist = $("#artistName").val();
  newSong.genre = $("#genreName").val();
  newSong.title = $("#songName").val();
  arrayObject.push(newSong);
  writeNewSong(arrayObject);
  showViewMusic();
}

function deleted () {
  $(this).parent().remove();
}

function showAddMusic () {
  $("#addMusicView").removeClass("hidden");
  $("#listMusic").addClass("hidden");
}

function showViewMusic () {  
  $("#addMusicView").addClass("hidden");
  $("#listMusic").removeClass("hidden");
}

$.ajax({
  url:"songs.json"
}).done(loaded);

$(".moreButton").click(loadMore);
$("#addMusic").click(showAddMusic);
$("#viewMusic").click(showViewMusic);
$("#addSong").click(addSongs);