## Longest Substring With No Repeating Letters

Write a method `int longestSubstringLength(String s)` that returns the length of the longest substring in `s` such that all characters are unique.

Examples:
```
longestSubstringLength("dabaeedabcbb"); // -> 5 (edabc)
longestSubstringLength("cccccc"); // -> 1 (c)
longestSubstringLength("abcabcabc"); // -> 3 (abc)
longestSubstringLength("jeekeetel"); // -> 3 (tel)
```

### Solution

```java
public static int longestSubstringLength(String s) {
    
    if(s == null || s.length() == 0) return 0;
    
    HashSet<Character> slidingWindow = new HashSet<Character>();
    
    int windowStart = 0;
    int max = 0;
    
    for(int i = 0; i < s.length(); i++) {
        char currChar = s.charAt(i);
        
        if(!slidingWindow.contains(currChar)) { // currChar doesn't make the window not unique
            slidingWindow.add(currChar);
        } else { // currChar made the window not unique, so remove front of window until it makes it unique 
            
            // remove window until not repeating
            while(s.charAt(windowStart) != currChar) { // this will remove the front of the window _up_ to the repeated char
                slidingWindow.remove(s.charAt(windowStart));
                windowStart++;
            }
            
            windowStart++; // move the window up to _past_ the repeating character
        }
        
        max = Math.max(max, i - windowStart+1);
    }
    
    return max;
}
```