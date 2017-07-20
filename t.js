document.turn="X";

function startGame()
{
	for(var i=1; i<=9; i++)
	{
		resetGame(i);
	 }
   document.count=0;
    
    if(document.turn=="X")
    {
  	document.turn="O";
    }
  	else 
      	{
  		document.turn="X";
  	}
    
     document.winner= null;
  
     setMessage(document.turn+" will go first ");
    drawCheck();
}
function setMessage(msg)
{
    document.getElementById ("message").innerText=msg;
}

function nextMove(square)
{ 
    drawCheck();
	if (document.winner != null)
	{
    setMessage(document.turn+" Already Won");
   	}
	else if(square.innerText=='')
	{
    square.innerText=document.turn;
    switchPlayer();
    }
    else 
    {
    setMessage("This square is already used..");
    }
       
}

function switchPlayer()
{
	if (checkWinner(document.turn))
	{
		alert(document.turn+" is winner");
	    document.winner=document.turn; 
	}
	else if(document.turn=="X")
	{
    document.turn="O";
    setMessage("It's " +document.turn +" Turn Now..");
    }
    else
    {
    document.turn="X";
    setMessage("It's " +document.turn +" Turn Now..");
    }
    document.count=document.count+1;
}
function checkWinner(move)
{
	var result=false;
    if (checkRow(1,2,3,move)||
    checkRow(4,5,6,move)||
    checkRow(7,8,9,move)||
    checkRow(1,4,7,move)||
    checkRow(2,5,8,move)||
    checkRow(3,6,9,move)||
    checkRow(1,5,9,move)||
    checkRow(3,5,7,move))
    {
    result =true;
    }
    return result;
}
function checkRow(a,b,c,move)
{
    var result=false;
    if(getSquare(a)==move&&getSquare(b)==move&&getSquare(c)==move)
    {
    result=true;
    }
    return result;
}
function getSquare(number)
{
   return document.getElementById("s"+number).innerText;
}


function resetGame(number)
{
    document.getElementById("s"+number).innerText=" ";
}
function drawCheck(){
    if(document.count==8){
        alert("Match is Drawn Start New Game");
    }       
}
