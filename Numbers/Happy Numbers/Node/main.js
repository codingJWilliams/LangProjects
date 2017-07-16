function square(x){
  return Number(x) * Number(x);
}
function happy(number) {
	return String(number)
		.split('')
		.map(square)
		.reduce((previous, current) => previous + current);
};

function isHappy(number) {
	if (number === 1) {
		return true;
	} else if (number === 4) {
		return false;
	}

	return isHappy(happy(number));
};

var numsFound = Array()
var i = 0;
while (numsFound.length <= Number(process.argv[2])){
  i++;
  if (isHappy(i)) {
    numsFound.push(i);
  }
}
console.log(numsFound.join(","))
