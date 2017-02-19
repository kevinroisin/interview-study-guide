## Merge K Sorted Linked Lists

Given an array of singly [Linked Lists](https://en.wikipedia.org/wiki/Linked_list), write a function to merge them and return the head of the merged list.

Example:
```
[(1) -> (5), (2) -> (7), (4)] -> (1) -> (2) -> (4) -> (5) -> (7)
```

Note that the solution below is not the most efficient. Using a [priority queue](https://en.wikipedia.org/wiki/Priority_queue) or a [divide and conquer](https://en.wikipedia.org/wiki/Divide_and_conquer) approach would give a faster solution.

### Solution

```java
public Node mergeLists(Node[] lists) {
    // iterate over and pick the smallest val, also store the index of the smallest
    int smallest = Integer.MAX_VALUE;
    int smallestIndex = -1;
    Node merged = null;
    Node mergedHead = null;
    while(true) {
        for(int i = 0; i < lists.length; i++) {
            if(lists[i] != null && lists[i].val < smallest) {
                smallest = lists[i].val;
                smallestIndex = i;
            }
        }
        
        // handle when all the nodes in the list are null (aka put into merged)
        if(smallestIndex < 0) break;
        
        // take the smallest and put it into merged
        if(merged == null) {
            mergedHead = lists[smallestIndex];
            merged = lists[smallestIndex];
        } else {
            merged.next = lists[smallestIndex];
            merged = merged.next;
        }
        lists[smallestIndex] = lists[smallestIndex].next;
        
        // reset for next iteration
        smallestIndex = -1;
        smallest = Integer.MAX_VALUE;
    }
    
    return mergedHead;
}
```