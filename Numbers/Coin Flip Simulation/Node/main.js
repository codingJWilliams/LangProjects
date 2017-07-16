var nums = Number(process.argv[2])
var possibilities = process.argv[3] === undefined ? 2 : Number(process.argv[3])

for (var i = 0; i < nums; i++){
  console.log(Boolean(Math.round(Math.random())));
}
