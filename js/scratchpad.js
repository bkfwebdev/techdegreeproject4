var selectBoxEvent = function (gamebox){
        gamebox.onclick = function(){
            if (currentPlayer === "O"){
				this.classList += " box-filled-1"; 
				this.style.backgroundImage = activeShape;
				activeShape = svgOimage; 
				currentPlayer = "X";
				if ($("#player2").hasClass("active")){$("#player2").removeClass("active");}
			}
            if (currentPlayer === "X"){
				this.classList += " box-filled-2"; 
				this.style.backgroundImage = activeShape;
				activeShape = svgXimage;
				currentPlayer = "O";
				if ($("#player1").hasClass("active")){$("#player1").removeClass("active");}
			}
				
            var selectedBoxNum = Array.prototype.indexOf.call(demBoxes, this);
                console.log(selectedBoxNum);
            theBoard[selectedBoxNum] = currentPlayer;
            if (winCheck(theBoard,xWinsString) === true){console.log("x wins!");}
            if (winCheck(theBoard,oWinsString) === true){console.log("o wins!");} 
                                    
    };
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
}