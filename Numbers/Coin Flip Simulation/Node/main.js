var nums = Number(process.argv[2])

var results = {
  "true": 0,
  "false": 0,
}
for (var i = 0; i < nums; i++){
  if (Boolean(Math.round(Math.random()))){
    results["true"] = results['true'] + 1;
  } else {
    results["false"] = results["false"] + 1;
  }
}
var total = results["true"] + results['false'];
console.log(`${Math.round(100 * (results['true'] / total))}% were heads (${results["true"]})`)
console.log(`${Math.round(100 * (results['false'] / total))}% were tails (${results["false"]})`)
