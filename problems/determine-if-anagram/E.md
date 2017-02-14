
## Determine if Anagram

Determine if two strings are [anagrams](https://en.wikipedia.org/wiki/Anagram).

Example: Given `str1 = "abcdd"` and `str2 = "dbdac"`, return `true`

### Solution
```java
public boolean determineAnagrams(String str1, String str2) {
    if (str1.length() != str2.length())
        return false;

    // store all characters from str1 into HashMap
    HashMap<Character, Integer> mapStr1 = new HashMap<Character,Integer>();
    for (int i = 0; i < str1.length(); i++) {
        Integer count = mapStr1.get(str1.charAt(i));
        mapStr1.put(str1.charAt(i), count != null ? count+1 : 1);
    }

    // remove from HashMap the characters in str2
    for (int j = 0; j < str2.length(); j++) {
        Integer count = mapStr1.get(str2.charAt(j));
        if (count == null || count == 0)  // str1 did not contain this char
            return false;
        else if (count == 1)  // last occurrence of this char in str1
            mapStr1.remove(str2.charAt(j));
        else
            mapStr1.put(str2.charAt(j), count-1);
    }

    // if empty, then they are anagrams (true)
    return mapStr1.isEmpty();
}
```
