$(gameStart)

function gameStart (){
$("#board").hide;
startDiv = document.createElement("div");
startDiv.innerHTML = "<header><h1>Tic Tac Toe</h1><a href="#board" class="button">Start game</a></header>"
startDiv.setAttribute("class","screen screen-start");
startDiv.setAttribute("id","start");
$("body").append(startDiv);
$("#start > button").click(function(){
	$("#board").show;
	$("#start").hide;
})
}