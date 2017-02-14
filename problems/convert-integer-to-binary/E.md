## Convert Integer to Binary

Write a function that prints out the binary form of an integer.
(Write the following function that is built into Java: `String s = Integer.toBinaryString(i);`)

Example: if `num = 35`, then print `100011`

### Iterative Solution
```java
public void printBinaryform(int num) {
    int[] binary = new int[40];
    int index = 0;

    while (num > 0) {
        binary[index++] = num % 2;
        num /= 2;
    }

    for (int i = index-1; i >= 0; i--)
        System.out.print(binary[i]);
}
```

### Recursive Solution
```java
public void printBinaryform(int number) {
    if (number <= 1) {
        System.out.print(number);
        return;
    }

    int remainder = number % 2; 
    printBinaryform(number >> 1);
    System.out.print(remainder);
}
```
