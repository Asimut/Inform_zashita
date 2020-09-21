function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5f9ymiSjc4A":
        Script1();
        break;
  }
}

function Script1()
{
  var storylinePlayer = GetPlayer();
var newIncomingText = storylinePlayer.GetVar("newText");
var newOutgoingText = "";
var myArray = newIncomingText.split("");
var arrayLength = myArray.length;

function typeText() {
  newOutgoingText = newOutgoingText + myArray[0];
  myArray.shift();
  storylinePlayer.SetVar("displayText",newOutgoingText);
  arrayLength = myArray.length;
  if (arrayLength == 0) {
     clearInterval(myInterval);
     }
  }

// A letter is typed every 100ms, adjust the typing speed by changing the 100 number below
var myInterval = setInterval(typeText, 40); 
}

