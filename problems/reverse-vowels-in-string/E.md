## Reverse the Vowels in a String

Write a method `String reverseVowels(String s)` to reverse all the vowels in a string.

Example: given `kevin`, the method should return `kiven`.

### Solution

```java
public String reverseVowels(String s) {
   char[] c = s.toCharArray();
   
   int i = 0;
   int j = c.length-1;
   
   while(j > i) {
       if(!isVowel(c[j])) j--;
       if(!isVowel(c[i])) i++;

       if(isVowel(c[i]) && isVowel(c[j])) {
           
           // perform swap
           char tmp  = c[i];
           c[i] = c[j];
           c[j] = tmp;
                 
           // move to next charactors
           j--;
           i++;
       }
   }
   
   return new String(c);
    
}

public boolean isVowel(char c) {
    switch(c) {
        case 'a':
            return true;
        case 'A':
            return true;
        case 'e':
            return true;
        case 'E':
            return true;
        case 'i':
            return true;
        case 'I':
            return true;
        case 'o':
            return true;
        case 'O':
            return true;
        case 'u':
            return true;
        case 'U':
            return true;
        default:
            return false;
    }
}
```