
function theWinnerIs (){
$("#board").hide;
winnerDiv = document.createElement("div");
winnerDiv.innerHTML = '<header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header>'
winnerDiv.setAttribute("class","screen screen-win");
winnerDiv.setAttribute("id","finish");
$("body").append(winnerDiv);
$("a").click(function(){
	resetBoard();
	$("#board").show;
	$("#start").hide;
})
}

function resetBoard (){
	for (let x=0; x<=8; x++){
	if ($(demBoxes[x]).hasclass("box-filled-1" )){
		$(demBoxes[x].removeClass "box-filled-1";
		$(demBoxes).css("background-image", "none");}
	if ($(demBoxes[x].hasclass("box-filled-2")){
		$(demBoxes[x]).removeclass("box-filled-2");
		$(demBoxes[x]).css("background-image", "none");
		}
	}
}