## Most Frequent Integer

Find the most frequent integer(s) in an array.

Example 1: Given the below array, your method should return `(7)`.
```java
int[] arr = {1,2,3,4,5,6,7,7,7,7};
```
Example 2: Given the below array, your method should return `(5) -> (6)`.
```java
int[] arr = {1,2,2,3,4,5,5,5,6,6,6,7};
```

```java
public LinkedList<Integer> findMode(int[] arr) {
    HashMap<Integer,Integer> hmap = new HashMap<Integer,Integer>();

    for (int i : arr) {
        Integer count = map.get(i);
        hmap.put(, count != null ? count+1 : 0);
    }

    Integer maxCount = 0;
    LinkedList<Integer> maxKeys = new LinkedList<Integer>();
    Set<Integer> keySet = hmap.keySet();

    for (Integer k : keySet) {
        Integer val = hmap.get(k);
        if (val == maxCount)
            maxKeys.add(k);
        else if (val > maxCount) {
            maxKeys.clear();
            maxKeys.add(k);
            maxCount = val;
        }
    }
    
    return maxKeys;
}
```
