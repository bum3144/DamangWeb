/*
*   Level 1 : calculator.js
*/

var sum = 0;
var note = '';

function plus(value) {
  sum += value;
  note += ' + ' + value;
}
function minus(value) {
  sum -= value;
  note += ' - ' + value;
}
function multiple(value) {
  sum *= value;
  note += ' * ' + value;
}
function divid(value) {
  sum /= value;
  note += ' / ' + value;
}
function init(value) {
  if(arguments.lengh == 0){
    sum = 0;
    note = '';
  }else{
    sum = value;
    note += + value;
  }
}

function printResult() {
  console.log(sum);
  console.log(note + " = " + sum);
}
