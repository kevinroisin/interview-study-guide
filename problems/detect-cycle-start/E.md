## Detect Cycle Start in a Linked List

Given a [Linked List](https://en.wikipedia.org/wiki/Linked_list), write a method to detect if there is a cycle in the list. If there is a cycle, return the node at the start of the cycle.

### Solution

```java
public ListNode findCycleStart(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow == fast) {
            // we have a cycle
            // if we walk the head pointer forward and slow or fast forward, they will meet at the start of cycle
            while(slow != head) {
                slow = slow.next;
                head = head.next;
            }
            
            return head;
        }
    }
    
    return null;
}
```