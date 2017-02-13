## Is Linked List a Palindrome?

Check if a singly linked list is a palindrome.

Example 1: Given `(a) -> (b) -> (c) -> (b) -> (a)`, then return `true`

Example 2: Given `(c) -> (b) -> (c) -> (c) -> (b) -> (c)`, then return `true`

Example 3: Given `(a) -> (a) -> (c) -> (b) -> (a)`, then return `false`

### Solution
```java
class Node {
    char value;
    Node next;
}
```

```java
public static boolean isPalindrome(Node node) {
    Node slowPtr = node;
    Node fastPtr = node;
    Stack<Node> firstHalf =  new Stack<Node>();

    // find middle of linked list
    while (slowPtr != null && fastPtr != null && fastPtr.next != null) {
        firstHalf.push(slowPtr);
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    // handle case for odd length list
    if (fastPtr != null) {
        slowPtr = slowPtr.next;
    }

    // compare what's on the firstHalf stack to the rest of the list
    while (slowPtr != null && !firstHalf.isEmpty()) {
        if (slowPtr.value != firstHalf.pop().value) {
            return false;
        }
        slowPtr = slowPtr.next;
    }
    
    return true;
}
```
