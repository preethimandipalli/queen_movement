// your code goes here
importPackage(java.io);
importPackage(java.lang);

var whereAboutUs = [[0,0]];
var currentposition_x = 0;
var currentposition_y = 0;
var currentDirection = "S";
var currentposition = "e8";
var arr = ["a","b","c","d","e","f","g","h"];

function changeDirection(Direction) {
  switch(Direction){
    case "N":
      currentDirection = "N";
      break;
    case "S":
      currentDirection = "S";
      break;
    case "E":
      currentDirection = "E";
      break;
    case "W":
      currentDirection = "W";
      break;
    case "SE":
      currentDirection = "SE";
      break;
    case "SW":
      currentDirection = "SW";
      break;
    case "NE":
      currentDirection = "NE";
      break;
    case "NW":
      currentDirection = "NW";
      break;
  }
}
function moveForward() {
  switch(currentDirection){
    case "N":
      if(currentposition_x - 1 < 0){
      	return "error";
      }
      currentposition_x = currentposition_x - 1;
      break;
    case "S":
      if(currentposition_x + 1 > 7){
      	return "error";
      }
      currentposition_x = currentposition_x + 1;
      break;
    case "E":
      if(currentposition_y + 1 > 7){
      	return "error";
      }
      currentposition_y = currentposition_y + 1;
      break;
    case "W":
      if(currentposition_y - 1 < 0){
      	return "error";
      }
      currentposition_y = currentposition_y - 1;
      break;
    case "SE":
      if(currentposition_x + 1 > 7 || currentposition_y + 1 > 7){
      	return "error";
      }
      currentposition_x = currentposition_x + 1;
      currentposition_y = currentposition_y + 1;
      break;
    case "SW":
      if(currentposition_x + 1 > 7 || currentposition_y - 1 < 0){
      	return "error";
      }
      currentposition_x = currentposition_x + 1;
      currentposition_y = currentposition_y - 1;
      break;
    case "NE":
      if(currentposition_x - 1 < 0 || currentposition_y + 1 > 7){
      	return "error";
      }
	  currentposition_x = currentposition_x - 1;
      currentposition_y = currentposition_y + 1;
      break;
    case "NW":
      if(currentposition_x - 1 < 0 || currentposition_y - 1 < 0){
      	return "error";
      }
	  currentposition_x = currentposition_x - 1;
      currentposition_y = currentposition_y - 1;
      break;
    default:
      return "directionerror";
  
  }
  var position = [currentposition_x,currentposition_y];
  whereAboutUs.push(position);
  return "updated";
}
function jumpMoveDirection(noOfSteps) {
  switch(currentDirection){
    case "N":
      if(currentposition_x - noOfSteps < 0){
      	return "error";
      }
      currentposition_x = currentposition_x - noOfSteps;
      break;
    case "S":
      if(currentposition_x + noOfSteps > 7){
      	return "error";
      }
      currentposition_x = currentposition_x + noOfSteps;
      break;
    case "E":
      if(currentposition_y + noOfSteps > 7){
      	return "error";
      }
      currentposition_y = currentposition_y + noOfSteps;
      break;
    case "W":
      if(currentposition_y - noOfSteps < 0){
      	return "error";
      }
      currentposition_y = currentposition_y - noOfSteps;
      break;
    case "SE":
      if(currentposition_x + noOfSteps > 7 || currentposition_y + noOfSteps > 7){
      	return "error";
      }
      currentposition_x = currentposition_x + noOfSteps;
      currentposition_y = currentposition_y + noOfSteps;
      break;
    case "SW":
      if(currentposition_x + noOfSteps > 7 || currentposition_y - noOfSteps < 0){
      	return "error";
      }
      currentposition_x = currentposition_x + noOfSteps;
      currentposition_y = currentposition_y - noOfSteps;
      break;
    case "NE":
      if(currentposition_x - 1 < 0 || currentposition_y + 1 > 7){
      	return "error";
      }
	  currentposition_x = currentposition_x - 1;
      currentposition_y = currentposition_y + 1;
      break;
    case "NW":
      if(currentposition_x - noOfSteps < 0 || currentposition_y - noOfSteps < 0){
      	return "error";
      }
	  currentposition_x = currentposition_x - noOfSteps;
      currentposition_y = currentposition_y - noOfSteps;
      break;
    default:
      return "directionerror";
  
  }
  var position = [currentposition_x,currentposition_y];
  whereAboutUs.push(position);
  return "updated";
}
function updatePosition() {
  currentposition = arr[currentposition_y] + (8-currentposition_x);
}


var stdin= new BufferedReader(new InputStreamReader(System['in']));
var line = stdin.readLine();
print("enter number of testcases")
var t = parseInt(line);
for(var i=0; i<t; i++) {
	var input = stdin.readLine();
	print("enter direction and number of jumps with a space in between them")
	var elements = input.split(" ");
	var d = String(elements[0]);
	var noOfJumps = parseInt(elements[1]);
    if(noOfJumps == 1){
    	changeDirection(d);
    	if(moveForward()=="error"){
    		print("invalid direction");
    	}else{
    	updatePosition();
    	print("Updated current position->")
    	print(currentposition);
    	}
    }else{
    	changeDirection(d);
    	if(jumpMoveDirection(noOfJumps)=="error"){
    		print("invalid direction")
    	}
    	else{
    	updatePosition();
    	print("Updated current position->",currentposition())
    	print(currentposition);
    	}
    }

}
