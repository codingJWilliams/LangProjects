var numToCalculate = Number(process.argv[2]);
var prevResult = numToCalculate;
for(var i = 1; i < numToCalculate; i++){
  prevResult = prevResult * i
}
console.log(prevResult);
