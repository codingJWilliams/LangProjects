var f = Array();
for (var i = 2; i <= process.argv.length; i++){
  f.push(process.argv[i])
}
function validate(cardNumber){
		var trimmed = String(cardNumber).replace(/[\s]/g, "")
			, length = trimmed.length
			, odd = false
			, total = 0
			, calc
			, calc2;
			if (length === 0) return true;
			if (!/^[0-9]+$/.test(trimmed)) return false;
			for (var i = length; i > 0; i--) {
				calc = parseInt(trimmed.charAt(i - 1));
				if (!odd) {
					total += calc;
				} else {
					calc2 = calc * 2;
					switch (calc2) {
					case 10: calc2 = 1; break;
					case 12: calc2 = 3; break;
					case 14: calc2 = 5; break;
					case 16: calc2 = 7; break;
					case 18: calc2 = 9; break;
					default: calc2 = calc2;
					}
					total += calc2;
				}
				odd = !odd;
			}
			return ((total % 10) === 0);
    }
function inArr(el, arr){
  for (var i = 0; i < arr.length; i++){
    if (i == el){
      return true
    }
  }
  return false
}
function cardType(cardNum){
  var prefixes = {
    "Mastercard": {
      prefixes: ["51", "52", "53", "54", "55"],
      lengths: [16]
    },
    "Visa": {
      prefixes: ["4"],
      lengths: [13, 16]
    },
    "American Express": {
      prefixes: ["34", "37"],
      lengths: [15],
    },
    "Diners club / Carte Blanche": {
      prefixes: ["300", "301", "302", "303", "304", "305", "36", "38"],
      lengths: [14]
    },
    "Discover": {
      prefixes: ["6011"],
      lengths: [16]
    },
    "enRoute": {
      prefixes: ["2014", "2149"],
      lengths: [15]
    },
    "JCB (15)": {
      prefixes: ["2131", "1800"],
      lengths: [15]
    },
    "JCB (16)": {
      prefixes: ["3"],
      lengths: [16]
    }
  }
  var found = false
  for (var key in prefixes) {
    // skip loop if the property is from prototype
    if (!prefixes.hasOwnProperty(key)) continue;
    for (var i = 0; i < prefixes[key]["prefixes"].length; i++){
      found = found ? true : cardNum.substring(0, prefixes[key]["prefixes"][i].split("").length) == prefixes[key]["prefixes"][i] && inArr(cardNum.split("").length, prefixes[key]['lengths']);
    }
    if (found) return key;
  }
  return false;
}
var f = ["4485909363505320"]
console.log("Checking card: (" + f.join(" ") + ")")
console.log("")
console.log("Card is " + (validate(f.join("")) && cardType(f.join("")) != false ? "valid." : "NOT VALID!"))
if (validate(f.join(""))){
  console.log("Card type: " + cardType(f.join("")))
}
