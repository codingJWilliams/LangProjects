function factors(num){
  var half = Math.floor(num / 2),
      fin = [1],
      i, j;
  num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

  for (i; i <= half; i += j) {
      num % i === 0 ? fin.push(i) : false;
  }
  fin.push(num)
  return fin;
}
var primeFactors = Array();
var factorsOfNum = factors(Number(process.argv[2]))
for (var i = 0; i < factorsOfNum.length; i++){
  if(factors(factorsOfNum[i]).length === 2) primeFactors.push(factorsOfNum[i]);
}
console.log(primeFactors.join(","))
