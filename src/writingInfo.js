"use strict";

let buttonFunctions = require("./buttonFunctions");

var songList = $("<div>");
var container = $("#songs");
var arrayObject = [];
var more = $("<button>").html("More...").addClass("moreButton");
container.append(songList);
container.append(more);

function writeNewSong (arrayObject) {
  var i = arrayObject.length - 1;
  writingInfo(i);
}

function printingSongInfo (array) {
  for (var i = 0; i < array.length; i ++) {
    arrayObject = array;
    writingInfo(i, array);
  }
} 

function writingInfo (x) {
  var note = $("<div>");
  var song = $("<h2>").html(`${arrayObject[x].title}`);
  var artist = $("<p>").html(`${arrayObject[x].artist} | ${arrayObject[x].album} | ${arrayObject[x].genre}`);
  var buttonDelete = $("<button>").html("Delete");
  buttonDelete.click(buttonFunctions.deleted);
  compileSongNote(note, song, artist, buttonDelete);
}

function compileSongNote (note, song, artist, buttonDelete) {
  note.append(song).append(artist).append(buttonDelete).addClass("songGroup capitalize");
  songList.append(note);
}

function addSongs () {
  var newSong = {};
  newSong.album = $("#albumName").val();
  newSong.artist = $("#artistName").val();
  newSong.genre = $("#genreName").val();
  newSong.title = $("#songName").val();
  arrayObject.push(newSong);
  writeNewSong(arrayObject);
  buttonFunctions.showViewMusic();
}

module.exports = {
  writingInfo, compileSongNote, printingSongInfo, writeNewSong, addSongs
};