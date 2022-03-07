'use strict'
var flag = true;
const mainDivOptions = [];
mainDivOptions[0] = '<img src="sources/chilled-cow-lofi-gif.gif" alt="TempImg" class="mainVideo"><h2>Goals</h2><p id="msg" onclick="homeScreenFade()">To Do:</p><ul><li id="YouTubeLink"><a href="https://www.youtube.com/watch?v=ChgK3V0Eezo" target="_blank">Among Us</a></li></ul><p id="shufflePara" style="width: 100px">This is an example of a multiline paragraph. I want to test how the shuffle text will wokr for multiple linesof text that is broken up into multiple lines When the amount of lines changes I wonder what it will look like.</p>';
mainDivOptions[1] = '<img src="sources/chilled-cow-lofi-gif.gif" alt="TempImg" class="mainVideo">';
mainDivOptions[4] = '<ul><li><a href="https://github.com/BHillard1717">Check out my Github!</a></li><li><a href="https://www.linkedin.com/in/brandon-hillard/">Add me on LinkedIn</a></li><li><a href="mailto: bhillard1717@gmail.com">Contact via Email!</a></li><li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">My solution to the traveling salesman problem in O(log(n)) time!</a></li></ul>';
mainDivOptions[5] = '<embed src="sources/Resume - Brandon Hillard.pdf" class="pdfView" />';
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

function pageTransition(clickedTab){
  var currentTab = document.getElementsByClassName("current");
    console.log(currentTab);
  //currentTab[0].className = "basic";
  console.log("PING");
  console.log(clickedTab);
  if(clickedTab.className == "current"){
    //do nothing
  }else{
    //change the current tab
    currentTab[0].className = "basic";
    clickedTab.className = "current";
    $( ".transition").toggleClass( "anim-trans-start" );
    //wait till its over
    //change the content
      //content will be stored as div objects and the main div will be set equal
      //to an array index based on the tab clicked 
    //then raise the thing
    setTimeout(() => {
      if(clickedTab.id === "linksHeading"){
        document.getElementById("mainDiv").innerHTML = mainDivOptions[4];
      }else if(clickedTab.id === "resumeHeading"){
        document.getElementById("mainDiv").innerHTML = mainDivOptions[5];
      }else if(flag){
      document.getElementById("mainDiv").innerHTML = mainDivOptions[1];
      }else{
        document.getElementById("mainDiv").innerHTML = mainDivOptions[0];
      }
      flag = !flag;

    }, 1000);
    setTimeout(() => {
      console.log("test");
      $( ".transition").toggleClass( "anim-trans-start" );
      $( ".transition").toggleClass( "anim-trans-end" );
      
    }, 1100);
    setTimeout(() => {
      console.log("test");
      $( ".transition").toggleClass( "anim-trans-end" );
      //$( ".transition").toggleClass( "anim-trans-start" );
      
    }, 2200);
    //$( "anim-trans-start").toggleClass( ".transition" );
    //set class to current
  }
  //$( ".transition").toggleClass( "anim-trans-start" );
  //$( ".anim-trans-start").toggleClass( "anim-trans-end" );
  //$( ".anim-trans-end").toggleClass( "transition" );
}

