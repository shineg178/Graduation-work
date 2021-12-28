#include <stdio.h>
 int main() {
	int N=0, P, K, A[5][5], B[5][5];
	for (P = 0; P <= 4; P++)
	   for(K = 0; K  <=4 ; K++) {
	   	N = N + 1;
	   	A[P][K] = N;
	   }
	   for(P = 0; P<=4; P++)
	   for (K = 0; K<=4; K++)
	   B[K][4-P] = A[P][K];
	   for(P = 0; P<=4; P++) {
	   	for(K = 0; K <=4; K++)
	   	printf("%3d",A[P][K]);
	   	     printf("\n");   
	   }
	   printf("\n");
	   for(P=0; P<=4; P++){
	   	for(K = 0; K <=4; K++)
	   	printf("%3d",B[P][K]);
	   	printf("\n");
	   }
}
