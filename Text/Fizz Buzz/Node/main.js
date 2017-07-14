for (var i = 0; i < 100; i++){
  var returnStack = String();
  if ((i % 3) == 0){
    returnStack = returnStack + "Fizz";
  }
  if ((i % 5) == 0){
    returnStack = returnStack + "Buzz";
  }
  if (returnStack === ""){
    returnStack = i.toString();
  }
  console.log(returnStack)
}
