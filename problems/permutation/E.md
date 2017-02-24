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

### Solution

```java
public static permutate(String word) {
    permutate("", word);
}

private static void permutate(String permutation, String word) {
    if(word.length() == 0) {
        System.out.println(permutation);
    } else {
        // loop through the letters left in the word, eg letter = word.charAt(i)
        // for each letter, call permutate with that letter appended to the permutation and removed from the word 
        for(int i = 0; i < word.length(); i++) {
            permutate(permutation+word.charAt(i), word.substring(0,i) + word.substring(i+1));
        }
    }
}
```