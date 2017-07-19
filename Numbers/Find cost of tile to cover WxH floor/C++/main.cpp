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
  int arg1 =  (int)strtol(argv[1], (char **)NULL, 10);
  int arg2 =  (int)strtol(argv[2], (char **)NULL, 10);
  int arg3 =  (int)strtol(argv[3], (char **)NULL, 10);
  cout << arg1 * arg2 * arg3 << endl;
}
