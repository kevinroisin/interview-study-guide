## Is a Palindrome

Check if a singly linked list is a palindrome.

Example 1: Given `(a) -> (b) -> (c) -> (b) -> (a)`, then return `true`

Example 2: Given `(c) -> (b) -> (c) -> (c) -> (b) -> (c)`, then return `true`

Example 3: Given `(a) -> (a) -> (c) -> (b) -> (a)`, then return `false`

### Solution
```java
class Node {
        int value;
        Node next;
 
        Node(int data) {
            value = data;
            next = null;
        }
    }
 
```

```java
public boolean isPalindrome(Node node) {
    boolean result = true;
    Node slowPtr = node;
    Node fastPtr = node;
    Stack<Node> firstHalf =  new LinkedList<Node>();

    // find middle of linked list
    while (slowPtr != null && fastPtr != null && fastPtr.next != null) {
        firstHalf.push(slowPtr);
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    // handle case for even sized list
    if (fastPtr != null) {
        if (slowPtr != firstHalf.pop) {
            result = false;
        }
    }

    while (slowPtr.next != null && firstHalf.peek != null) {
        if (slowPtr.next != firstHalf.pop) {
            result = false;
        }
    }
}
```
