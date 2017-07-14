var vowels = ["a", "e", "i", "o", "u"];
function isVowel ( char ) {
  return vowels.indexOf(char) >= 0;
}


// NOT MY OWN CODE
function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a string >', (answer) => {
  // MY OWN CODE
  var found = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }
  for (var i = 0; i < answer.split("").length; i++){
    var currentChar = answer.split("")[i];
    if(isVowel(currentChar)){
      found[currentChar.toLowerCase()] = found[currentChar.toLowerCase()] + 1;
    }
  }
  var totalCount = Number();
  for (var key in found) {
    // skip loop if the property is from prototype
    if (!found.hasOwnProperty(key)) continue;
    totalCount = totalCount + Number(found[key]);
  }
  console.log("\n\n\n======================= TOTAL: " + totalCount.toString())
  for (var key in found) {
    // skip loop if the property is from prototype
    if (!found.hasOwnProperty(key)) continue;
    console.log("  " + key + " | " + paddy(Math.round(100*(found[key] / totalCount)), 3) + "% | Count: " + found[key].toString())
  }
  console.log("===============================")


  // END MY OWN CODE
  rl.close();
});
