## Reverse a String

Reverse a string.

### Iterative Solution
```java
public String reverseIterative(String str) {
    StringBuilder strBuilder = new StringBuilder();
    char[] strChars = str.toCharArray();

    for (int i = strChars.length-1; i >= 0; i--) {
        strBuilder.append(strChars[i]);
    }

    return strBuilder.toString();
}
```

### Recursive Solution
```java
public String reverseRecursive(String str) {
    if (str.length() == 1) {
	    return str;
	}
	    
	return reverseRecursive(str.substring(1)) + str.charAt(0);
}
```
