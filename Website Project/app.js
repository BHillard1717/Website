'use strict'

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function homeScreenFade(){
    document.getElementById("YouTubeLink").innerHTML = '<a href="https://youtu.be/owBJWRYwWVo" target="_blank">Vocode</a>';
}