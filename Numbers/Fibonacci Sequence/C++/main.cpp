#include <iostream>
#include <stdlib.h>
#include <cstdio>
#include <ctime>
using namespace std;
int fib(int n){
  if(n <= 1){
    return n;
  }
  return fib(n-1) + fib(n-2);
}
int main(int argc, char* argv[])
{
  int its =  (int)strtol(argv[1], (char **)NULL, 10);
  clock_t start;
  cout << argv[1] << endl;
  double duration;
  start = clock();
  for (int i = 0; i < its; i++){
    cout << fib(i) << endl;
  }
  duration = (clock() - start) / (double) CLOCKS_PER_SEC;

}
