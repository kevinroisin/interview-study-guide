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

### Explanation

To generate all permutations of "ABC", you must place each letter at index 0, and then you must also place the remaining letters in all possible indexes for the remaining indexes.

Concrete example: placing "A" in index 0, you must place "B" and "C" in the 1st and 2nd indexes. Does "B" go in index 1, or does "C"? They both need to. In other words, you must generate all permutations where "A" is at index 0. There are 2 such permuations which have "A" at index 0: "ABC", (where "B" is in index 1 and "C" in index 2) and also "ACB" (where "C" is in index 1 and "B" in index 2). 

You now repeat this process, but with "B" at index 0, and then repeat again but with "C" at index 0.

Just how many permutations are there? For "ABC", there are 6 possible permutations, since permutations are n-factorial. So for "ABC" (length 3), there are 3*2*1=6 permutations. This is because for the first index, you have 3 options, then given you took a letter away for the 0 index, you have 2 letters remaining for the 1 index. Given 2 letters already used, 1 for the 0th index and 1 for 1st index, you have 1 letter remaining for the 2nd index. 

Other phrasing attempt, not using 0 indexed: You have 3 letters to choose from the for the first location, 2 to choose from for the 2nd location, and 1 to choose from for the 3rd location.

Worksheet: for "ABC", fill in the missing letters of the 6 possible permutations. 
```
// all combinations with A at start
A _ _
A _ _

// all combinations with B at start
B _ _
B _ _

// all combinations with C at start
C _ _
C _ _
```