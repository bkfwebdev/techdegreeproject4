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
        var getScore = [];
        
    // initialize board
    var initializeBoard = function (){
    for(let x=0; x<=8; x++){
        theBoard[x] = "*";
    }
    console.log(theBoard);
    }

    

    // OPENING GAME SCREEN
    function gameStart (){
    initializeBoard();
    $("#board").hide;
    let startDiv = document.createElement("div");
    startDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><a href="#board" class="button">Start game</a></header>';
    startDiv.setAttribute("class","screen screen-start");
    startDiv.setAttribute("id","start");
    screenUpdate(startDiv);
    }
    
    // END GAME WIN SCREEN
    function gameOver(theWinner){
        initializeBoard()
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
        initializeBoard()
        let drawDiv = document.createElement("div");
        drawDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><p class="message">it\'s a draw</p><a href="#board" class="button">New game</a></header>';
        drawDiv.setAttribute("id","finish");
        drawDiv.setAttribute("class","screen screen-win  screen-win-tie");
        screenUpdate(drawDiv);
        
    }
    
    function screenUpdate(newScreeen){
        initializeBoard()
        $("#theBoard").hide(); 
        $("body").append(newScreeen); 
        $("a").click(function(){
            $("#finish").remove(); 
            $("#start").remove();
            resetBoard();
            $("#board").show();
        });
    
    }
     
    // RESET THE BOARD AT END OF GAME
    function resetBoard (){
        initializeBoard()
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
        
        return false;
    }

// BLOCK OF FUNCTIONS TO GET COMPUTER'S NEXT MOVE

getScore[0] = function (boardValues){
    console.log(boardValues);
    let score = 0;
    if (theBoard[0] != "*"){return score;}
    if (theBoard[1] == "O"){score = score + 5;}else if (theBoard[1] == "*"){score = score + 10;} else {score = score + 15;}
    if (theBoard[2] == "O"){score = score + 5;}else if (theBoard[2] == "*"){score = score + 10;} else {score = score + 15;}
    if (theBoard[3] == "O"){score = score + 5;}else if (theBoard[3] == "*"){score = score + 10;} else {score = score + 15;}
    if (theBoard[4] == "O"){score = score + 5;}else if (theBoard[4] == "*"){score = score + 10;} else {score = score + 15;}
    if (theBoard[6] == "O"){score = score + 5;}else if (theBoard[6] == "*"){score = score + 10;} else {score = score + 15;}
    if (theBoard[8] == "O"){score = score + 5;}else if (theBoard[8] == "*"){score = score + 10;} else {score = score + 15;}
    return score;
}

getScore[1] = function (){
    let score = 0;
    if (theBoard[1] != "*"){return score;} 
    if (theBoard[0] = "O"){score = score + 5}else if (theBoard[0] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[2] = "O"){score = score + 5}else if (theBoard[2] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[7] = "O"){score = score + 5}else if (theBoard[7] == "*"){score = score + 10;}else {score = score + 15;}
    return score;

}
getScore[2] = function (){
    let score = 0;
    if (theBoard[2] !="*"){return 0;} 
    if (theBoard[0] = "O"){score = score + 5}else if (theBoard[0] == "*"){score = score + 10;}else {score = score + 15}
    if (theBoard[1] = "O"){score = score + 5}else if (theBoard[1] == "*"){score = score + 10;}else {score = score + 15}
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15}
    if (theBoard[5] = "O"){score = score + 5}else if (theBoard[5] == "*"){score = score + 10;}else {score = score + 15}
    if (theBoard[6] = "O"){score = score + 5}else if (theBoard[6] == "*"){score = score + 10;}else {score = score + 15}
    if (theBoard[8] = "O"){score = score + 5}else if (theBoard[8] == "*"){score = score + 10;}else {score = score + 15}
    return score;
}

getScore[3] = function (){
    let score =0;
    if (theBoard[3] != "*"){return 0;}
    if (theBoard[0] = "O"){score = score + 5}else if (theBoard[0] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[5] = "O"){score = score + 5}else if (theBoard[5] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[6] = "O"){score = score + 5}else if (theBoard[6] == "*"){score = score + 10;}else {score = score + 15;}
    return score;
}
getScore[4] = function (){
    let score =0;
    if (theBoard[4 ] != "*"){return 0;}
    if (theBoard[0] = "O"){score = score + 5}else if (theBoard[0] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[1] = "O"){score = score + 5}else if (theBoard[1] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[2] = "O"){score = score + 5}else if (theBoard[2] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[3] = "O"){score = score + 5}else if (theBoard[3] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[5] = "O"){score = score + 5}else if (theBoard[5] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[6] = "O"){score = score + 5}else if (theBoard[6] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[7] = "O"){score = score + 5}else if (theBoard[7] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[8] = "O"){score = score + 5}else if (theBoard[8] == "*"){score = score + 10;}else {score = score + 15;}
    return score;

}

getScore[5] = function (){
    let score =0;
    if (theBoard[5] != "*"){return 0;}
    if (theBoard[2] = "O"){score = score + 5}else if (theBoard[2] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[3] = "O"){score = score + 5}else if (theBoard[3] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[8] = "O"){score = score + 5}else if (theBoard[8] == "*"){score = score + 10;}else {score = score + 15;}
    return score;

}

getScore[6] = function (){
    let score =0;
    if (theBoard[6] != "*"){return 0;}
    if (theBoard[0] = "O"){score = score + 5}else if (theBoard[0] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[2] = "O"){score = score + 5}else if (theBoard[2] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[3] = "O"){score = score + 5}else if (theBoard[3] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[7] = "O"){score = score + 5}else if (theBoard[7] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[8] = "O"){score = score + 5}else if (theBoard[8] == "*"){score = score + 10;}else {score = score + 15;}
    return score;
}

getScore[7] = function (){
    let score = 0;
    if (theBoard[7] != "*"){return 0;}
    if (theBoard[1] = "O"){score = score + 5}else if (theBoard[1] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[6] = "O"){score = score + 5}else if (theBoard[6] == "*"){score = score + 10;}else {score = score + 15;}
    if (theBoard[8] = "O"){score = score + 5}else if (theBoard[8] == "*"){score = score + 10;}else {score = score + 15;}
    return score;

}

getScore[8] = function (){
    let score =0;
    if (theBoard[3] != "*"){return 0;}
    if (theBoard[0] = "O"){score = score + 5}else if (theBoard[0] == "*"){score = score + 10;}else {score = score + 15; }
    if (theBoard[2] = "O"){score = score + 5}else if (theBoard[2] == "*"){score = score + 10;}else {score = score + 15; }
    if (theBoard[4] = "O"){score = score + 5}else if (theBoard[4] == "*"){score = score + 10;}else {score = score + 15; }
    if (theBoard[5] = "O"){score = score + 5}else if (theBoard[5] == "*"){score = score + 10;}else {score = score + 15; }
    if (theBoard[6] = "O"){score = score + 5}else if (theBoard[6] == "*"){score = score + 10;}else {score = score + 15; }
    if (theBoard[7] = "O"){score = score + 5}else if (theBoard[7] == "*"){score = score + 10;}else {score = score + 15; }
    return score;

}


    function computeMyMove(){
        let theScores=[];
        for (let x = 0; x <= 8; x++){
            theScores[x] = getScore[x]();
        } 
     for (let x = 0; x<=8; x++){
         console.log("box ", x ," has a score of ", theScores[x]);
        }
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
                
                let condition1 = (winCheck(theBoard,xWinsString))
                let condition2 = (winCheck(theBoard,oWinsString))
                let condition3 = moveCount === 9;
                if (condition1){gameOver("x");}
                else if (condition2){gameOver("o");}
                else {
                    if ((condition1 === false) && (condition2 === false) && (condition3 === true)){itsaDraw();}
                }
            
                                        
        };
     computeMyMove();   
    }
    
    }
    // INTERACTIVE BOARD ENGINE
    // add box scoring routine
    // log scores to the console
    // use scores to select a square
    // log selection to the console
    // show selection on game board
    // detect win/lose/draw vs computer
    // reset game with option play vs human or computer
    
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