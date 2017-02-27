//Bryant K. Feld techdegree project 4 tic tac toe v1 
(function (){// SELF EXECUTING FUNCTION OPEN
  
// VARIABLES AND CONSTANTS
	const xWinsString = "XXX";
	const oWinsString = "OOO";
	const svgOimage = 'url("img/o.svg")';
    const svgXimage = 'url("img/x.svg")';
    var currentPlayer = "O";
    var theBoard = [];
	var demBoxes = document.getElementsByClassName("box");
	var moveCount = 0;
	
// OPENING GAME SCREEN
function gameStart (){
$("#board").hide;
startDiv = document.createElement("div");
startDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><a href="#board" class="button">Start game</a></header>';
startDiv.setAttribute("class","screen screen-start");
startDiv.setAttribute("id","start");
$("body").append(startDiv);
$("a").click(function(){
	$("#start").hide();
	$("#board").show();
});
}

// END GAME WIN SCREEN
function gameOver(theWinner){
	let endDiv = document.createElement("div");
	endDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header>';
	endDiv.setAttribute("id","finish");
	endDiv.setAttribute("class","screen screen-win") ;
	if (theWinner === "o"){endDiv.className += " screen-win-one";}
	if (theWinner === "x"){endDiv.className += " screen-win-two";}
	$("#theBoard").hide();
	$("body").append(endDiv);
	$("a").click(function(){
		$("#finish").remove(); 
		$("#start").remove();
		resetBoard();
		$("#board").show();
		console.log("clickety click");
	});
}

// END GAME DRAW SCREEN
function itsaDraw (){
	let drawDiv = document.createElement("div");
	drawDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><p class="message">it\'s a draw</p><a href="#" class="button">New game</a></header>';
	drawDiv.setAttribute("id","finish");
	drawDiv.setAttribute("class","screen screen-win  screen-win-tie");
	$("#theBoard").hide(); 
	$("body").append(drawDiv); 
	$("a").click(function(){
		$("#finish").remove(); 
		$("#start").remove();
		resetBoard();
		$("#board").show();
		console.log("clickety click");
	});
	
}
 
// RESET THE BOARD AT END OF GAME
function resetBoard (){
	for (let x=0; x<=8; x++){
	if ($(demBoxes[x]).hasClass("box-filled-1" )){
		$(demBoxes[x]).removeClass("box-filled-1");
		$(demBoxes).css("background-image", "none");}
		else {
	if ($(demBoxes[x]).hasClass("box-filled-2")){
		$(demBoxes[x]).removeClass("box-filled-2");
		$(demBoxes[x]).css("background-image", "none");
		}
		}
	}
$("#player1").addClass("active");  
$("#player2").removeClass ("active");
theBoard.length = 0;    
activeShape = svgOimage;
currentPlayer = "O"; 
moveCount = 0;
}

// CHECK THE BOARD FOR A WINNER OR DRAW
function winCheck(board,testString){
    let boolTest = [];
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
	if (moveCount === 9){itsaDraw();}
    return false;
}


// GAME BOARD EVENT LISTENER - BOX SELECTOR
function selectBoxEvent(gamebox){
        gamebox.onclick = function(){
			let boxCondition = ($(this).hasClass("box-filled-1") || $(this).hasClass("box-filled-2"));
			if (boxCondition === false){
			let selectedBoxNum = Array.prototype.indexOf.call(demBoxes, this);
                theBoard[selectedBoxNum] = currentPlayer;
            if (currentPlayer === "O"){
				this.classList += " box-filled-1"; 
				this.style.backgroundImage = activeShape;
				activeShape = svgXimage; 
				currentPlayer = "X";
				if ($("#player1").hasClass("active")){
					$("#player1").removeClass("active");
					$("#player2").addClass("active");
					moveCount += 1;
					}
			}else{
            if (currentPlayer === "X"){
				this.classList += " box-filled-2"; 
				this.style.backgroundImage = activeShape;
				activeShape = svgOimage;
				currentPlayer = "O";
				if ($("#player2").hasClass("active")){
					$("#player2").removeClass("active");
					$("#player1").addClass("active");
					moveCount += 1;
					}
			}
			}	
            
            if (winCheck(theBoard,xWinsString) === true){gameOver("x");}
            if (winCheck(theBoard,oWinsString) === true){gameOver("o");}
		
                                    
    };
	
}
}
// INTERACTIVE BOARD ENGINE
$(gameStart);
$("#player1").addClass("active");    
activeShape = svgOimage;
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
// SELF EXECUTING FUNCTION CLOSE
})();