## Mergesort

Average: O(nlogn)

Worst case: O(nlogn)

Space complexity: O(n)

```java
public static void sort(int[] a, int start, int end) {
    if(start < end) {
        int mid = (start+end)/2;
        sort(a, start, mid);
        sort(a, mid+1, end);
        
        // merge these 2 sorted subarrays
        merge(a, start, mid, end);
    }
        
}

public static void merge(int[] a, int start, int mid, int end) {
    // copy the array
    int[] copy = new int[a.length];
    
    // only need to copy the sections we are currently merging
    for(int i = start; i <= end; i++) {
        copy[i] = a[i];
    }

    int leftIter = start; // iterator for merging the left section
    int rightIter = mid+1;  // iterator for merging the right section
    
    // we need to merge 2 sections, say 0-4,5-9
    while(leftIter <= mid && rightIter <= end) {
        if(copy[leftIter] <= copy[rightIter]) { // left is smaller, so we take from left
            a[start] = copy[leftIter];
            leftIter++;
        } else { // right is smaller, so we take from right
            a[start] = copy[rightIter];
            rightIter++;
        }   
        start++;
    }
    
    // check if the left half has leftovers
    while(leftIter <= mid) {
        a[start] = copy[leftIter];
        start++;
        leftIter++;
    }
    
    // check if the right half has leftovers
    while(rightIter <= end) {
        a[start] = copy[rightIter];
        start++;
        rightIter++;
    }
}
```
