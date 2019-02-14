//Bryant K. Feld  tic tac toe v1.1
(function (){
// SELF EXECUTING FUNCTION OPEN
// VARIABLES AND CONSTANTS
	const xWinsString = "XXX";
	const oWinsString = "OOO";
	const svgOimage = 'url("img/o.svg")';
    const svgXimage = 'url("img/x.svg")';
    var currentPlayer = "O";
    var theBoard = [];
	var demBoxes = document.getElementsByClassName("box");
	var moveCount = 0;
	var activeAI = null;
	var bestMove = null;
	moveScore = [];
	

	scoreCriteria = {
		box0:[1,2,3,6,4,8],
		box1:[0,2,4,7],
		box2:[0,1,5,8,4,6],
		box3:[0,6,4,5],
		box4:[0,1,2,3,5,6,7,8],
		box5:[3,4,2,8],
		box6:[0,3,7,8,4,2],
		box7:[6,8,1,4],
		box8:[2,5,0,4,6,7]
	};

	function computeScore(board,criteria){
		let myLoop = criteria.length;
		let myScore = 0;
		for (let x=0; x<myLoop; x++){
		if (board[criteria[x]] = ""){points = 1};
		if (board[criteria[x]] = "X"){points = 2};
		if (board[criteria[x]] = "O"){points = 3};
		myScore = myScore + points;
	}
	return myScore
	}

	function getBestMove (){
	let bestMoveScore = 0;
	let bestMoveIndex = null;
	 moveScore[0] = computeScore(theBoard,scoreCriteria.box0);
	 moveScore[1] = computeScore(theboard,scoreCriteria.box1);
	 moveScore[2] = computeScore(theBoard,scoreCriteria.box2);
	 moveScore[3] = computeScore(theBoard,scoreCriteria.box3);
	 moveScore[4] = computeScore(theBoard,scoreCriteria.box4);
	 moveScore[5] = computeScore(theBoard,scoreCriteria.box5);
	 moveScore[6] = computeScore(theBoard,scoreCriteria.box6);
	 moveScore[7] = computeScore(theBoard,scoreCriteria.box7);
	 moveScore[8] = computeScore(theBoard,scoreCriteria.box8);
	for (let x=0; x<=8; x++){
		if (moveScore[x] > bestMoveScore){bestMoveIndex = x};
	}
	return bestMoveIndex;
	};

	
// OPENING GAME SCREEN
function gameStart (){
$("#board").hide;
let startDiv = document.createElement("div");
startDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><a href="#board" id="human" class="button">VS Human Start</a><a href="#board" id="computer" class="button">VS Computer Start</a></header>';
startDiv.setAttribute("class","screen screen-start");
startDiv.setAttribute("id","start");
screenUpdate(startDiv);
}

// END GAME WIN SCREEN
function gameOver(theWinner){
	let endDiv = document.createElement("div");
	endDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#board" class="button">New game</a></header>';
	endDiv.setAttribute("id","finish");
	endDiv.setAttribute("class","screen screen-win") ;
	if (theWinner === "o"){endDiv.className += " screen-win-one";}
	if (theWinner === "x"){endDiv.className += " screen-win-two";}
	screenUpdate(endDiv);
}

// END GAME DRAW SCREEN
function itsaDraw (){
	let drawDiv = document.createElement("div");
	drawDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><p class="message">it\'s a draw</p><a href="#board"  class="button">New game</a></header>';
	drawDiv.setAttribute("id","finish");
	drawDiv.setAttribute("class","screen screen-win  screen-win-tie");
	screenUpdate(drawDiv);
	
}

function screenUpdate(newScreeen){
	$("#theBoard").hide(); 
	$("body").append(newScreeen); 
	$("#human").click(function(){
		cleanItup();
		activeAI = false;
	});
	$("#computer").click(function(){
		cleanItup();
		activeAI = true;
	}); 
}

	function cleanItup (){
		$("#finish").remove(); 
		$("#start").remove();
		resetBoard();
		$("#board").show();
	};


 
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
activeShape = svgXimage;
currentPlayer = "X"; 
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
	
    return false;
}


// GAME BOARD EVENT LISTENER - BOX SELECTOR
function selectBoxEvent(gamebox){
        gamebox.onclick = function(){
			let boxCondition = ($(this).hasClass("box-filled-1") || $(this).hasClass("box-filled-2"));
			if (boxCondition === false){
			let selectedBoxNum = Array.prototype.indexOf.call(demBoxes, this);
                theBoard[selectedBoxNum] = currentPlayer;
            if (currentPlayer === "O" && activeAI === false){
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
			if (currentPlayer === "X" && activeAI === false){
			
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
            
            let condition1 = (winCheck(theBoard,xWinsString))
            let condition2 = (winCheck(theBoard,oWinsString))
			let condition3 = moveCount === 9;
			if (condition1){gameOver("x");}
			else if (condition2){gameOver("o");}
			else {
				if ((condition1 === false) && (condition2 === false) && (condition3 === true)){itsaDraw();}
			}
		
                                    
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