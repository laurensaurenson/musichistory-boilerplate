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