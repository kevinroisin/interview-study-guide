## LRU Cache

Design a [Least Recently Used Cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)

### Solution
```java
public class Node {
	public Node next;
	public Node prev;
	public int val;
	public int key;
	
	public Node(int value) {
		val = value;
	}
	
	public Node(int value, int keyValue) {
		val = value;
		key = keyValue;
	}
}

public class LRUCache {
	int capacity;
	Node head = null;
	Node tail = null;
	HashMap<Integer, Node> hmap = new HashMap<Integer,Node>();
	
	public LRUCache(int capacity) {
		this.capacity = capacity;
	}
	
	public int getKey(int key) {
		if (hmap.containsKey(key)) {  // update head
			Node node = hmap.get(key);
			moveToHead(node);
			return node.val;
		}
		
		return -1;
	}
	
	public void setKey(int key, int value) {
		if (hmap.containsKey(key)) {
			Node node = hmap.get(key);
			node.val = value;
			moveToHead(node);
		} else {
			add(key, value);
		}
	}

	private void moveToHead(Node node) {
		if (node == head) return;
		
		if (node.next != null) {  // if not tail
			node.next.prev = node.prev;
		} 

		node.prev.next = node.next;
		
		head.prev = node;
		node.next = head;
		node.prev = null;
		head = node;
	}
	
	private void add(int key, int value) {
		Node node = new Node(value, key);
		
		// Add to Linked List (update head)
		if (head == null) {
			head = node;
		} else {
			head.prev = node;
			node.next = head;
			head = node;
		}
		// Add to HashMap
		hmap.put(key, node);
		
		// Remove tail if exceeds capacity
		if (hmap.size() > capacity) {
			hmap.remove(tail.key);
			
			tail = tail.prev;
			tail.next = null; // de-referenced tail will be garbage collected
		}
		else if (tail == null) {
			tail = node;
		}
	}
}
```
