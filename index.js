
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

function currentLine(deli) {
  if (deli.length == 0) {
    return "The line is currently empty.";
  }

  var devuelve = "The line is currently: ";
  for (var i = 1; i < deli.length; i++) {
    devuelve += `${i}. ${deli[i]}, `;
  }
  // incluye el ultimo, sin la coma final
  devuelve += `${i}. ${deli[i]}`);

  return devuelve;
}
