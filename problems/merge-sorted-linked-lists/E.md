
## Merging Two Sorted Linked Lists

Given two sorted linked lists, `list1` and `list2`, return a sorted linked list consisting of all the elements from both `list1` and `list2` in ascending order

Example:

`list1 = (1) -> (3) -> (6) -> (7)`

`list2 = (1) -> (2) -> (6) -> (10) -> (11) -> (13)`

`resultList = (1) -> (1) -> (2) -> (3) -> (6) -> (6) -> (7) -> (10) -> (11) -> (13)`


### Solution
```java
public Node mergeLists(Node list1, Node list2) {
    Node curr = null; //current node of result list
    Node resulthead = null;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            if (resulthead == null) { // set first node of list3
                resulthead = list1;
                curr = list1;
            } else {
                curr.next = list1;
                curr = curr.next;
            }

            list1 = list1.next;
        } else {
            if (resulthead == null) { // set first node of list3
                resulthead = list2;
                curr = list2;
            } else {
                curr.next = list2;
                curr = curr.next;
            }

            list2 = list2.next;
        }
    }

    // handle remaining nodes left in non-null list
    if (list1 != null) {
        curr.next = list1;
    } else if (list2 != null) {
        curr.next = list2;
    }

    return resulthead;
}
```