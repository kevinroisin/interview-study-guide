## Determine If Rotated

Given two integer arrays, determine of the second array is a rotated version of the first array.  The first array will be sorted.

Example: Original Array `a = {1,2,3,4,5,6,7,8}`, Rotated Array `b = {4,5,6,7,8,1,2,3}`

### Solution
```java
public static boolean isRotated(int[] a, int[] b) {
    if (a.length != b.length)
        return false;

    // find the rotation position with binary search
    int left = 0;
    int right = b.length - 1;
    while (b[left] > b[right]) {
        int mid = left + (left+right) / 2;

        if (b[left] < b[mid])
            left = mid+1;
        else
            right = mid;
    }
    
    // for clarity, we rename left (result of the above loop) to offset
    // offset is where the shift occurrs in b
    int offset = left;

    // compare first portion of original array to end of rotated
    for(int bIter = left; bIter < b.length; bIter++) {
        if(a[bIter-offset] != b[bIter]) return false;
    }
    
    // compare second portion of original array to start of rotated
    for(int bIter = 0; bIter < offset; bIter++) {
        if(b[bIter] != a[a.length-offset+bIter]) return false;
    }

    return true;
}
```
