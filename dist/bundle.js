(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Songs = require("./song-array.js");

$.ajax({
  url:"songs.json"
}).done(Songs.loaded.loaded);

function addEventHandlers () {
  $(".moreButton").click(Songs.loaded.loadMore);
  $("#addMusic").click(Songs.buttonFunctions.showAddMusic);
  $("#viewMusic").click(Songs.buttonFunctions.showViewMusic);
  $("#addSong").click(Songs.writingInfo.addSongs);
}

addEventHandlers();
},{"./song-array.js":4}],2:[function(require,module,exports){
"use strict";


function showAddMusic () {
  $("#addMusicView").removeClass("hidden");
  $("#listMusic").addClass("hidden");
}

function showViewMusic () {  
  $("#addMusicView").addClass("hidden");
  $("#listMusic").removeClass("hidden");
}

function deleted () {
  $(this).parent().remove();
} 

let buttonFunctions = {
  showAddMusic, showViewMusic, deleted
};

module.exports = buttonFunctions;
},{}],3:[function(require,module,exports){
"use strict";

let writingInfo = require("./writingInfo");

function loaded ( data ) {
  let arrayObject = data.songs;
  writingInfo.printingSongInfo(arrayObject);
}

function loadMore () {
  $.ajax({
    url:"more.json"
  }).done(loaded);
  $(".moreButton").addClass("hidden");
}



module.exports = {loaded, loadMore};
},{"./writingInfo":5}],4:[function(require,module,exports){
"use strict";

let buttonFunctions = require("./buttonFunctions");
let writingInfo = require("./writingInfo");
let loaded = require("./loaded");
// let addSong = require("./addSong");

let songFunctions = {
  buttonFunctions, writingInfo, loaded
};

module.exports = songFunctions;
},{"./buttonFunctions":2,"./loaded":3,"./writingInfo":5}],5:[function(require,module,exports){
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
},{"./buttonFunctions":2}]},{},[1])


//# sourceMappingURL=bundle.js.map
