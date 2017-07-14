var num = 8;

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

console.log(fin)
