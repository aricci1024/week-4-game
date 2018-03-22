
//Some global variables
var targetNumber = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;
var wins = 0;
var losses = 0;

var gameStart = function () {

    //empty the value of the crystal at the start of the game
    $("#crystals").empty();
    
    //Loop to crate crystal img and value for 4 images
    for (var i = 0; i < 4; i++) {
        //generate random number for the user to get to
        var givenValue = Math.floor(Math.random() * 11) + 1;
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        imageCrystal.attr("data-crystalvalue", givenValue);
        console.log(givenValue);

        //Add crystal image to page
        crystals.append(imageCrystal);
    }
}

gameStart();

//Everytime a crystal is clicked applies the same thing
$(document).on("click", ".crystal-image", function () {

    //Determining the crystal's value then grab its value when the crystal is clicked then converts it from a string to a integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    //Add the in integer of the crystal clicked to the score counter
    counter += crystalValue;
    $("#your-score").text(counter);

    //Win or loss counter and text display
    if (counter === targetNumber) {
        wins ++;
        $("#wins").text(wins);
        $("#you-win-lose").text("You Win!");
        counter = 0;
        reset();
    }

    else if (counter >= targetNumber) {
        losses ++
        $("#losses").text(losses);
        $("#you-win-lose").text("You Lose!");
        counter = 0;
        reset();
    }
});

var reset = function() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    $("#number-to-guess").text(targetNumber);
    gameStart();
}