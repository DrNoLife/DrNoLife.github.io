$(document).ready(function() {

    // Default bingo guesses
    bingoGuesses = [];

    // Create the first instance of the game. With no bingo stuff on.
    function InitializeGamePlate() {
        // Create the game plate
        var plate = "";

        for(i = 1; i < 6; i++) {
            for(j = 1; j < 6; j++) {
                plate += "<div class=\"bingo-spot bingo-row-" + i + " bingo-column-" + j + "\"></div>";
            }
        }

        $('.bingo-game').append(plate);

        // Mark the free spot with the correct class
        $(".bingo-spot.bingo-row-3.bingo-column-3").addClass("free-spot");
    }
    
    // Sets the default guesses, and types them out in the textarea.
    function SetDefaultGuesses() {

        bingoGuesses = [
            "Wallbang",
            "Teamkill",
            "40 Bomb",
            "Office",
            "Guess Correctly",
            "Other Team Cheating",
            "Auto",
            "Bunny Hops",
            "Walls",
            "Already Muted",
            "Ace",
            "Spinbot",
            "Still Lose A Round",
            "200 ADR",
            "Scout Deag Round",
            "Friend Is Cheating",
            "Aim",
            "LMG Buy",
            "90%+ HS",
            "Team Mad @ Cheater",
            "Wingman",
            "Leaver",
            "Knife Skin",
            "Locks On To The Wrong Player"
        ];

        for(i = 0; i < bingoGuesses.length; i++) {
            $("#bingo-text-input").append(bingoGuesses[i] + ", ");
        }
    }

    // When called, will fill in all squares with a random element from bingoGuesses array.
    function FillInBingoStuff() {

        var temp1 = [];

        for(var i = 0; i < bingoGuesses.length; i++) {
            temp1.push(bingoGuesses[i]);
        }
        
        for(var i = 0; i < 5; i++) {

            for(var j = 0; j < 5; j++) {

                if(i == 2 && j == 2) {
                    $(".free-spot").html("<p>FREE</p>");
                } else {

                    var ii = i + 1;
                    var jj = j + 1;

                    var BingoOutput = "This should have some other value... Ups.";

                    // Get length of array. Get random Number, and subtract 1 so we can access 0 and not overflow. 
                    // Set output to element based on random. Remove element from temp1.

                    var t1Length = temp1.length;
                    var randNum = randomInteger(1, t1Length) - 1;
                    BingoOutput = temp1[randNum].toUpperCase();
                    temp1.splice(randNum, 1);

                    //console.log("Length: " + t1Length + "\nRandom Number: " + randNum + "\nBingoOutput: " + BingoOutput + "\nT1 New Length: " + temp1.length);

                    // Update html
                    $(".bingo-spot.bingo-row-" + ii + ".bingo-column-" + jj + "").html("<p>" + BingoOutput + "</p>");
                }

            }

        }


    }

    // Taken directly from StackOverflow
    // Credit: https://stackoverflow.com/a/24152886
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Huh, I wanted this to be a function, which would be called when a keypress happened via html.. But seems like it just aint going to happen lol
    $("#bingo-text-input").keypress(function() {
        var textarea = $("#bingo-text-input");

        var splitText = textarea.val().split(",");

        for(var i = 0; i < splitText.length - 1; i++) {
            if(splitText[i] != "") { // For some reason, it was adding an empty string into the array... well, this stops that behaviour
                splitText[i] = $.trim(splitText[i]);
            }
        }

        bingoGuesses = splitText;

        console.log(splitText);
    });

    // Initialize gameplate
    InitializeGamePlate();

    // Call the default guesses stuff
    SetDefaultGuesses();

    // Fill in bingo stuff eksde
    FillInBingoStuff();

    // Clicking the "New Plate" button
    $("#bingo-reroll").click(function() {
        FillInBingoStuff();
        $(".bingo-spot").removeClass("checked-off");
    });

    // Upon click of bingo stuff, add a class to the div clicked.. if div already has class, remove said class
    $(".bingo-spot").click(function() {

        if($(this).hasClass("checked-off")) {
            $(this).removeClass("checked-off");
        } else {
            $(this).addClass("checked-off");
        }
        
    });


    /* 
        HEADS UP, for anyone reading this code.
        A large majority of this code was written early in the morning, after a sleepless night. So don't expect high quality code. It's going to be a mess.
        Even more so, considering I rarely ever touch jQuery anymore.
    */
});