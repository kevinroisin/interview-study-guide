## Add Two Linked Lists

Given two [Linked Lists](https://en.wikipedia.org/wiki/Linked_list) that each represent a non-negative integer in in reverse (`23` would be given as `(3) -> (2)`), write a method to add these numbers and return as the result as a linked list.

Example: given `(3) -> (2)` and `(7) -> (2)` as input, your method should return `(0) -> (5)` which is (`23 + 27 = 50`).

### Solution

```java
public static Node addTwoLL(Node list1, Node list2) {
    Node resultList = null;
    Node prev = null;
    int carry = 0;
    
    while (list1 != null || list2 != null || carry != 0) {
        Node curr = new Node();
        int sum = (list1 == null ? 0 : list1.val) + (list2 == null ? 0: list2.val) + carry;
        curr.val = sum % 10;
        carry = sum / 10;
        
        if (resultList == null) {
            resultList = curr;
        }
        else {
            prev.next = curr;
        }
            
        prev = curr;
        list1 = list1.next;
        list2 = list2.next;
    }
    
    return resultList;
}
```