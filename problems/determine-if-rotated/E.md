## Determine If Rotated

Given two integer arrays, determine of the second array is a rotated version of the first array.  The first array will be sorted.

Example: Original Array `a = {1,2,3,4,5,6,7,8}`, Rotated Array `b = {4,5,6,7,8,1,2,3}`

### Solution
```java
public boolean isRotated(int[] a, int[] b) {
    if (a.length != b.length)
        return false;

    // find the rotation position with binary search
    int left = 0;
    int right = b.length;
    while (b[left] > b[right]) {
        int mid = left + (left+right) / 2;

        if (b[left] < b[mid])
            left = mid+1;
        else
            right = mid;
    }

    // iterate the arrays and compare
    // compare first portion of original array to end of rotated {1,2,3}
    int i;
    for (int i = 0;  i < left; i++) {
        if (a[i] != b[left])
            return false;
        left++;
    }
    // compare the second portion {4,5,6,7,8}
    for (int j = 0; j < a.length-left; j++) {
        if (a[i] != b[j])
            return false;
    }

    return true;
}
```
