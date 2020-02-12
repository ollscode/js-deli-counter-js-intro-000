
var katzDeliLine = [];

function takeANumber(deli, person) {
  deli.push(person);

  return `Welcome, ${person}. You are number ${deli.length} in line.`;
}

function nowServing(deli) {
  if (deli.length == 0) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${deli.shift()}.`;
}
