## Most Frequent Integer

Find the most frequent integer in an array.

```java
int[] arr = {1,2,3,4,5,6,7,7,7,7};
```

```java
public void findMode(int[] arr) {
    HashMap<Integer,Integer> hmap = new HashMap<Integer,Integer>();

    for (int i : arr) {
        Integer count = map.get(i);
        hmap.put(, count != null ? count+1 : 0);
    }

    Integer maxCount = 0;
    LinkedList<Integer> maxKey = new LinkedList<Integer>();
    Set<Integer> keySet = hmap.keySet();

    for (Integer k : keySet) {
        Integer val = hmap.get(k);
        if (val == maxCount)
            maxKey.add(k);
        else if (val > maxCount) {
            maxKey.clear();
            maxKey.add(k);
            maxCount = val;
        }
    }
}
```
