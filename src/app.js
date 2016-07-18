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