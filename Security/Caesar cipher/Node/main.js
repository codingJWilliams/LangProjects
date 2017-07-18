var fs = require("fs");

fs.readFile(process.argv[3], "utf8", function(err, data) {
  if(err != undefined) throw err;
  var finale = Array();
  for (var i = 0; i < data.split("").length; i++){
    var char = data.split("")[i];
    var charAsciiCode = char.toLowerCase().charCodeAt(0);
    if (charAsciiCode < 97 || charAsciiCode > 122){
      finale.push(char);
    } else {
      var key = Number(process.argv[5]);
      if (process.argv[2] == "encrypt"){
        if ((key + charAsciiCode) > 122){
          var result = key + (charAsciiCode - 26);
        } else {
          var result = key + charAsciiCode;
        }
        finale.push(String.fromCharCode(result));
      } else {
        if ((charAsciiCode - key) < 97){
          var result = (charAsciiCode + 26) - key;
        } else {
          var result = charAsciiCode - key;
        }
        finale.push(String.fromCharCode(result));
      }

    }
  }
  fs.writeFile(process.argv[4], finale.join(""), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Done! You may now freely share " + process.argv[4] + " freely with only a 1/25 chance of someone reading it :P");
}); 
});
