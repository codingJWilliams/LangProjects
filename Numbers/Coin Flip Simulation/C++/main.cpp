#include <iostream>
#include <stdlib.h>
#include <cstdio>
#include <ctime>
#include <cstdlib>
#include <math.h>       /* round, floor, ceil, trunc */

using namespace std;
bool flip()
{
    return 0 + (rand() % (1 - 0 + 1)) == 1;
}
int main(int argc, char* argv[])
{
  unsigned int its =  (unsigned int)strtol(argv[1], (char **)NULL, 10);
  bool results [its];
  for (int i = 0; i < its + 1; i++){
    results [i] = flip();
  }
  float headCount = 0;
  float tailCount = 0;
  for( unsigned int a = 0; a < sizeof(results)/sizeof(results[0]); a = a + 1 ){
    if(results [a] == true){
      headCount = headCount + 1;
    }
    if(results [a] == false){
      tailCount = tailCount + 1;
    }

  }
  cout << round(100 * (headCount / (headCount + tailCount))) << "% were heads (" << headCount << ")" << endl;
  cout << round(100 * (tailCount / (headCount + tailCount))) << "% were tails (" << tailCount << ")" << endl;
}
