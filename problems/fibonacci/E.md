
## Fibonnaci

Given `int n`, implement the first `n` numbers in the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number)

Fibonacci: 0, 1, 1, 2, 3, 5, 8. 13, 21, 34, 55, 89, 144, ...

### Iterative Solution
```java
public int fibonnaciIterative(int n) {
   int x = 0;
   int y = 1;
   int z = 1;

   for (int i = 0; i < n; i++) {
       x = y;
       y = z;
       z = x + y;
   }

   return x;
}
```

### Recursive Solution
```java
public int fibonnaciRecursive(int n) {
   if (n == 0 || n == 1) {
       return n;
   }

   return fibonnaciRecursive(n-1) + fibonnaciRecursive(n-2);
}
```
