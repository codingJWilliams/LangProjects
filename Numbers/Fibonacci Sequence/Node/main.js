function fib(n){
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2)
}
if(Number(process.argv[2]) <= 40) for (var i = 1; i < Number(process.argv[2]); i ++) console.log(fib(i));
