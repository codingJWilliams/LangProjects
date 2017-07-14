var request = require("request");
request("https://uploadbeta.com/api/pi/?cached&n=" + String(Number(process.argv[2]) + 2), function(error, response, body) {
  body = body.replace("\"", "")
  body = body.replace("\"", "")
  var bArray = body.split("")
  bArray.reverse()
  bArray.splice(-2)
  bArray.reverse()
  console.log("3." + bArray.join(""));
});
