// beginning of the day, empty arr
var katzDeliLine = [];

// takes the arr and push it a new name to it and returns
// a string with the name and the position from the arr
function takeANumber(katzDeliLine, name) {
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.push(name)) + " in line.");
}

// takes arr and checks if there are items in arr and returns first elem
// if empty returns a string
function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return "Currently serving " + (katzDeliLine.shift()) + ".";
    }
  else {
    return "There is nobody waiting to be served!";
  }
}


// takes arr and checks if arr contains an element or not 
// if arr length > 0, will loop (map) through arr, to create
// a new string, and push it to a new arr, and returns new arr.
function currentLine(katzDeliLine) {
 if (katzDeliLine.length) {
   const newArr = katzDeliLine.map((name, index ) => (
     `${index + 1}. ${name}`
     ));
     return  "The line is currently: " + newArr.join(", ");
 } else {
   return 'The line is currently empty.';
 }
}