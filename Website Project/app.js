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
  let endGoal = 'Hello, My Name is <br> Brandon Hillard. <br> This is just a test';
  let VocodeTest = 'Vocode'
  $(document.getElementById("shufflePara")).shuffleText('test <br> test', {
    time     : 30,
    maxTime  : 2500,
    amount   : 4,
    complete : function(){
        // Do something
        document.getElementById("YouTubeLink").innerHTML = '<a href="https://youtu.be/owBJWRYwWVo" target="_blank">' + VocodeTest + '</a>';
    }
  });
}

function pageTransition(){
  console.log("PING");
  //get the location of the line
  $( ".transition").toggleClass( "anim-trans" );

  //increase the size over time to cover the entire bottom of the screen
  
  //await delay(1000);
  //goalTab.className = "topNavBackground";

  //check the status of the navbar //might not be needed
  //if(navBarStatus.className == "topnav"){
    
  //}else{
    //in responsive mode so just hard transition or wipe from below the bar?
  //}
  //increase it to the width of the page
  //have a block grow in size over the page
  //change the contents under the block
  //block shrinks back
  //line shrinks back to 0
}

