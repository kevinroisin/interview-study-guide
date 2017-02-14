## String Permutation

Write a method `void permuate(String word)` which prints all permutations of a string.

Example: `abc` should print:
```
abc
acb
bac
bca
cab
cba
```

```java
public static permutate(String word) {
    permutate("", permutation);
}

private static void permutate(String permutation, String word) {
    if(word.length() == 0) {
        System.out.println(permutation);
    } else {
        for(int i = 0; i < word.length(); i++) {
            permutate(permutation+word.charAt(i), word.substring(0,i) + word.substring(i+1));
        }
    }
}
```