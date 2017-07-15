#include <iostream>
using namespace std;
#include <cstdio>
#include <ctime>

int fib(int n){
  if(n <= 1){
    return n;
  }
  return fib(n-1) + fib(n-2);
}
int main(){
  clock_t start;
  double duration;

  start = clock();
  for (int i = 0; i<40; i++){
    cout << fib(i) << endl;
  }
  duration = (clock() - start) / (double) CLOCKS_PER_SEC;
  cout << "Time taken for 40 fibonaccis: " << duration << endl;
}
