var cost = Number(process.argv[2])
var given = Number(process.argv[3])
var currency = process.argv[4] == undefined ? "£" : process.argv[4];
var values = {
  "£50 note": 5000,
  "£20 note": 2000,
  "£10 note": 1000,
  "£5 note": 500,
  "£2 coin": 200,
  "£1 coin": 100,
  "50p coin": 50,
  "20p coin": 20,
  "10p coin": 10,
  "5p coin": 5,
  "2p coin": 2,
  "1p coin": 0
};
if (currency === "£"){
  cost = cost * 100
  given = given * 100
}
var changeArr = Array();
var change = given - cost;
if (change <= 0){
   console.log("No change - You underpaid");
   process.exit();
}

while (change <= 0){
  for (value in values){
    if ((change - values[value]) >= 0){
      change = change - values[value]
      console.log("pushed " + value)
      console.log(change)
      changeArr.push(value)
    }
  }
}
console.log(changeArr)
