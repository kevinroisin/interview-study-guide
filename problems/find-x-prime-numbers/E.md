## Find First X Prime Numbers

Use dynamic programming to find the first X prime numbers.

Example: if `X = 5`, then return `{2,3,5,7,11}`

### Solution
```java
public int[] findPrimes(int xPrimes) {
    int[] primes = new int[xPrimes];

    // special handling for 2
    if (xPrimes >= 1) {
        primes[0] = 2;
    }

    int primeCount = 1;  // counter for how many primes are found
    int i = 3;
    while (primeCount < xPrimes) {
        boolean isPrime = true;

        for (int j = 0; j < primeCount; j++) {
            if (i % primes[j] == 0) {
                isPrime = false;
            }
        }

        if (isPrime)
            primes[primeCount++] = i;   // store the prime numbr; increment the counter

        i += 2;   // increment by 2 to skip even numbers
    }

    return primes;
}
```
