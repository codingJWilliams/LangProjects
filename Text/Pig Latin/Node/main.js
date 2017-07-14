var vowels = ["a", "e", "i", "o", "u"];
function isVowel ( char ) {
  return vowels.indexOf(char) >= 0;
}
function getWordVowelArray ( word ) {
  var toRet = Array();
  for(var i = 0; i < word.split("").length; i++) toRet.push( isVowel(word.split("")[i]) );
  return toRet;
}
var userWord = process.argv[2].toLowerCase();
if (getWordVowelArray(userWord)[0]) {
  console.log(userWord + "way")
} else if (getWordVowelArray(userWord)[0] == false && getWordVowelArray(userWord)[1] == false){
  console.log(userWord.substring(2) + userWord.split("")[0] + userWord.split("")[1] + "ay");
} else if (getWordVowelArray(userWord)[0] == false && getWordVowelArray(userWord)[1] == true){
  console.log(userWord.substring(1) + userWord.split("")[0] + "ay");
}
