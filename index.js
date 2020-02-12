
var katzDeliLine = [];

function takeANumber(deli, person) {
  deli.push(person);

  return `Welcome, ${person}. You are number ${deli.length} in line.`;
}
