    var xWinsString = "XXX";
	var oWinsString = "OOO";
    var currentPlayer = "O"
    var theBoard = [];
	var svgOimage = 'url("img/o.svg")';
    var svgXimage = 'url("img/x.svg")';
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
	console.log("click");
	
});
}
$(gameStart);
$("#player1").addClass("active");    
var demBoxes = document.getElementsByClassName("box");
    activeShape = svgOimage;
// game board event listener for player selected box
var selectBoxEvent = function (gamebox){
        gamebox.onclick = function(){
			var selectedBoxNum = Array.prototype.indexOf.call(demBoxes, this);
                console.log(selectedBoxNum);
            theBoard[selectedBoxNum] = currentPlayer;
            if (currentPlayer === "O"){
				this.classList += " box-filled-1"; 
				this.style.backgroundImage = activeShape;
				activeShape = svgXimage; 
				currentPlayer = "X";
				if ($("#player1").hasClass("active")){
					$("#player1").removeClass("active");
					$("#player2").addClass("active");
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
					}
			}
			}	
            
            if (winCheck(theBoard,xWinsString) === true){console.log("X wins!");}
            if (winCheck(theBoard,oWinsString) === true){console.log("O wins!");} 
                                    
    };
	
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
