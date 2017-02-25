## Quicksort

Average: O(nlogn)

Worst case: O(n^2)

Space complexity: O(1) <-- In-place sort

```java
public static void sort(int[] a, int low, int high) {
    if(low >= high) return;
    
    int pivot = partition(a, low, high);
    sort(a, low, pivot-1);
    sort(a, pivot+1, high);
}

public static int partition(int[] a, int low, int high) {
    int pivot = a[high];
    int wall = low;
    
    for(int i = low; i < high; i++) {
        if(a[i] <= pivot) {
            // move a[i] to before the wall
            swap(a, i, wall);
            wall++;
        }
    }
    swap(a, high, wall);
    
    return wall;
}
```
