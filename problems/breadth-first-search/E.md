## Level Order Traversal (Breadth First Search)

Print a tree by levels, otherwise known as [BFS](https://en.wikipedia.org/wiki/Breadth-first_search).

```java
public void levelOrderTraverasl(Node n) {
    Queue<Node> queue = new LinkedList<Node>();

    queue.add(n);
    while (!queue.isEmpty()) {
        Node temp = queue.poll();
        System.out.println(temp.value);
        if (temp.left != null)
            queue.add(temp.left);
        if (temp.right != null)
            queue.add(temp.right);
    }
}
```
