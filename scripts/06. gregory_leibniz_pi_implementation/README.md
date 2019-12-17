# Not the most efficient way to compute pi.

	./test > output.txt

Create a near 1GB text file in under a minute.

	x = 7323449

	pi = 3.1415927901373681407903859508223831653594970703125000000000000000000000000000000000000000000000000000


# Source Code

	/*
	Jae Min Kim
	9/21/2018
	This is an implementation of the Gregory-Leibniz series formula to find the closest value of pi.
	The formula is pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	*/

	#include <stdio.h>

	long double pi;
	long double current;
	long double x;
	int a;

	int main()
	{
		for(x=1;x=x;x+=2)
		{//pi = (4/x) ...
			if(a){// true
				current = (4/x);
				pi = pi - current;
			a = a - 1;
			//printf("true"); 
			}else{ // false
				current = (4/x);
				pi = pi + current;
			a = a + 1;
			//printf("false");
			}
			printf("%.100Lf\n",pi);
		}
	}

[Back](https://jaemnkm.github.io/docs_redirect)