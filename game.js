
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var started = true;
var level = 0;
var i = 0;
  function nextSequence() {
   userClickedPattern =[]
  var randomnumber = Math.floor(Math.random() * buttonColours.length);
  var randomChosenColour = buttonColours[randomnumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  $("#level-title").text("level"+"  "+level);
  level++;
 }

function playSound(name){
  var song = new Audio("sounds/"+name+".mp3");
        song.play()
        animatePress(name);
 }

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){ 
  $("#"+currentColour).removeClass("pressed");
}, 100);}

function checkAnswer(currentLevel){
  // ما فهمتا if(currentLevel[i] === gamePattern[level] )
  // if(currentLevel[i] === gamePattern[i]
  //   i++;
if(userClickedPattern[currentLevel] === gamePattern[currentLevel] ){
  if(userClickedPattern.length === gamePattern.length){
  setTimeout(function(){
  nextSequence(); } ,1000);
}
}
else {
  var GameOver = new Audio("sounds/wrong.mp3");
  $("body").addClass("game-over");
  setTimeout(function(){
$("body").removeClass("game-over");
  },200);
  GameOver.play();
  $("#level-title").text("Game Over, Press Any Key to Restart ");
   startOver();
}
}
function startOver(){
  level = 0; 
  gamePattern = [];
  started = true;
}
    $(".btn").click(function(){
    var userChosenColour =$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    

     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
    });

    $(document).keypress(function () {
      if (started) {
         nextSequence();
         started = false;
      }
    });
