function fib(n){
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2)
}
//console.time("fibonaccis")  //Out of interest I timed node vs cpp - Node was 3x slower
if(Number(process.argv[2]) <= 40) for (var i = 1; i < Number(process.argv[2]); i ++) console.log(fib(i));
//console.timeEnd("fibonaccis")
