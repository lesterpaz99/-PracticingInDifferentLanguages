#include <stdio.h>

int max_of_numbers(int num1, int num2, int num3, int num4) 
{
  int array[4] = {num1, num2, num3, num4};
  int max = array[0];
  for (int i = 0; i < 4; i++)
  {
    if (max < array[i])
    {
      max = array[i];
    }
  }
  return max;
}

int main() {
  int num1, num2, num3, num4;
  int result = max_of_numbers(10, 82, 4, 6);
  printf("%d", result);

  return 0;
}