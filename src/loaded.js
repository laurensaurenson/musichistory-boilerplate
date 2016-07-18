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