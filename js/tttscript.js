
	xWinsString = "XXX";
	oWinsString = "OOO";
    currentPlayer = ""
    theBoard = [];

    svgOimage = '<svg xmlns="http://www.w3.org/2000/svg" width=100% height=100% viewBox="0 0 82 82" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg>';
    
    svgXimage = '<svg xmlns="http://www.w3.org/2000/svg" width=100% height=100% viewBox="0 0 82 83" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg>';
    
var demBoxes = document.getElementsByClassName("box");
    activeShape = null
    document.getElementById("player1").onclick = function(){activeShape = svgOimage; currentPlayer = "O";}
    document.getElementById("player2").onclick = function(){activeShape = svgXimage; currentPlayer = "X";}
    
    blankBox = "";
    activePlayer = null;
    // game board event listener
var selectBoxEvent = function (gamebox){
        gamebox.onclick = function(){
            gamebox.innerHTML = activeShape;
             var selectedBoxNum = Array.prototype.indexOf.call(demBoxes, this);
                console.log(selectedBoxNum);
            theBoard[selectedBoxNum] = currentPlayer;
            if (winCheck(theBoard,xWinsString) === true){console.log("x wins!");}
            if (winCheck(theBoard,oWinsString) === true){console.log("o wins!");} 
                                    }
    }
     for (var index = 0; index < demBoxes.length; index++){
         selectBoxEvent(demBoxes[index]);
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


function getPlayerInput(){}
function updateDisplay(){}
function theWinnerIs(){}
function newGame(){}
function tttBrain (){"play the game"}
function tttOffense (){"find path to three in a row"}
function tttDefense (){"block opponents path to three in a row"}

