let targetNum=Math.floor(Math.random()*20+1);
console.log(`targetNum = ${targetNum}`);



function checkValue() {
  let result = parseInt($(".form-control").val());

  if (result > targetNum) {
    $("#result").css("color", "crimson");
    $("#result").text("Too High! This student does not receive a prize.");
    
  } else if (result < targetNum) {
    $("#result").css("color", "blue");
    $("#result").text("Too Low! This student does not receive a prize.");
} else if (result === targetNum){
     $("#result").css("color", "green");
    $("#result").text("Correct! This student gets the prize.");
} else {
     $("#result").css("color", "darkgoldenrod");
    $("#result").text("Invalid entry. Please enter an actual number.");
}


};
   
