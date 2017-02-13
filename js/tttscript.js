    var xWinsString = "XXX";
	var oWinsString = "OOO";
    var currentPlayer = ""
    var theBoard = [];

    svgOimage = 'url("img/o.svg")';
    
    svgXimage = 'url("img/x.svg")';
    
var demBoxes = document.getElementsByClassName("box");
    activeShape = null
    document.getElementById("player1").onclick = function(){activeShape = svgOimage; currentPlayer = "O";}
    document.getElementById("player2").onclick = function(){activeShape = svgXimage; currentPlayer = "X";}
    
    blankBox = "";
    activePlayer = null;
    // game board event listener
var selectBoxEvent = function (gamebox){
        gamebox.onclick = function(){
            if (currentPlayer === "O"){this.classList += " box-filled-1"; this.style.backgroundImage = activeShape;}
            if (currentPlayer === "X"){this.classList += " box-filled-2"; this.style.backgroundImage = activeShape;}
            var selectedBoxNum = Array.prototype.indexOf.call(demBoxes, this);
                console.log(selectedBoxNum);
            theBoard[selectedBoxNum] = currentPlayer;
            if (winCheck(theBoard,xWinsString) === true){console.log("x wins!");}
            if (winCheck(theBoard,oWinsString) === true){console.log("o wins!");} 
                                    }
    }
     for (var index = 0; index < demBoxes.length; index++){
         selectBoxEvent(demBoxes[index]);
        
            
         $(demBoxes[index]).hover(function(){
              var  boxStatus = $(this).hasClass("box-filled-1") || $(this).hasClass("box-filled-2");
             if(boxStatus === false){$(this).css("background-image", activeShape);}
    }, function(){
              var  boxStatus = $(this).hasClass("box-filled-1") || $(this).hasClass("box-filled-2");
             if (boxStatus === false){$(this).css("background-image", "none");}
});
         
     }
                                  
var winCheck = function (board,testString){
    var boolTest = [];
    boolTest[0] = ((board[0]+ board[1] + board[2]) === testString);
    boolTest[1] = ((board[3]+ board[4] + board[5]) === testString);
    boolTest[2] = ((board[6]+ board[7] + board[8]) === testString);
    boolTest[3] = ((board[0]+ board[3] + board[6]) === testString);
    boolTest[4] = ((board[1]+ board[4] + board[7]) === testString);
    boolTest[5] = ((board[2]+ board[5] + board[8]) === testString);
    boolTest[6] = ((board[0]+ board[4] + board[8]) === testString);
    boolTest[7] = ((board[6]+ board[4] + board[2]) === testString);
    for (var index = 0; index <= 7; index++){
        if (boolTest[index] === true){return true;}
    }
    return false;
}
winList = {
    win1:[0,1,2],
    win2:[3,4,5],
    win3:[6,7,8],
    win4:[0,3,6],
    win5:[1,4,7],
    win6:[2,5,8],
    win7:[0,4,8],
    win8:[6,4,2]
};


function getPlayerInput(){}
function updateDisplay(){}
function theWinnerIs(){}
function newGame(){}
function tttBrain (){"play the game"}
function tttOffense (){"find path to three in a row"}
function tttDefense (){"block opponents path to three in a row"}
