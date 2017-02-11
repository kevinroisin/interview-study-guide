## Reverse Linked List

Reverse a linked list such that `(0) -> (1) -> (2) -> (3)` becomes `(3) -> (2) -> (1) -> (0)`. This can be solved iteratively as well as recursively.

Before we jump to the solutions, let's declare our `Node` class:

```java
class Node {
    int val;
    Node next;
}
```

### Iteratively

```java
public Node reverse(Node n) {
    Node prev = null;
    Node next = null;

    while(n != null) {
        next = n.next;
        n.next = prev;
        prev = n;
        n = next;
    }

    return prev;
}
```

### Recursively
```java
public Node reverse(Node n) {
    return reverse(n, null);
}

private Node reverse(Node n, Node prev) {
    if(n == null) return prev;

    Node next = n.next;
    n.next = prev;
    return reverse(next, n);
}
```