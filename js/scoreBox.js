function scoreBox(box) {
  if (box) {
    if (box = "X") {
      return 5;
    }
    if (box = "O") {
      return 15;
    }
  } else {
    return 25;
  }
}

boxZeroScore = function(theBoard){
let score = 0;
 score = score 
 + scoreBox(theBoard[1]) 
 + scoreBox(theBoard[2]) 
 + scoreBox(theBoard[3]) 
 + scoreBox(theBoard[4]) 
 + scoreBox(theBoard[6])
 + scoreBox(theBoard[8]);
 return score; 
}

boxOneScore = function(theBoard){
  let score = 0;
  score = score 
  + scoreBox(theBoard[0])
  + scoreBox(TheBoard[2])
  + scoreBox(theBoard[4])
  + scoreBox(theBoard[7]);
}