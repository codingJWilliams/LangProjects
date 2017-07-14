var fs = require("fs");
var result = Object();
// #stolencode
function top10Dictionary (dict){
  var items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
  });

  // Sort the array based on the second element
  items.sort(function(first, second) {
      return second[1] - first[1];
  });
  return items;
}
function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}

// Not stolen code

fs.readFile("..\\Sample Data\\essay.txt", "utf8", function(err, data) {
  data = data.replace(",", "");
  data = data.replace(".", "");
  for (var i = 0; i < data.split(" ").length; i++){
    var word = data.split(" ")[i].toLowerCase();
    if(result[word] == undefined) {
      result[word] = 1
    } else {
      result[word] = result[word] + 1;
    }
  }
  console.log("============= TOTAL: " + Object.keys(result).length.toString())
  var t10 = top10Dictionary(result).slice(0, 10);
  var longestLength = 0;
  for(var i = 0; i < t10.length; i++) {
    if(t10[i][0].split("").length > longestLength) {
      longestLength = t10[i][0].split("").length;
    }
  }
  for(var i = 0; i < t10.length; i++){
    var wordArray = t10[i];
    console.log(` ${paddy(wordArray[0], longestLength + 1, " ")} | ${wordArray[1]} occurances`)
  }
  console.log(" == End ==")
});
