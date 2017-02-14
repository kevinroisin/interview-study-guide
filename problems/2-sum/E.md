## 2 Sum

Given an array of unsorted integers and a target integer `x`, write a method `int[] twoSum(int[] a, int x)` that returns the indices of two numbers that sum to `x`.

Example: given `x = 10` and `int[] a = [9,2,1,4,7]`, your function should return `[0,2]` in any order. If no such combination exists that sum to `x`, your method return `[-1,-1]`.

### Solution

```java
public int[] twoSum(int[] nums, int target) {
    
    // store complements in a hashmap. key is complement, value is index
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    
    for(int i = 0; i < nums.length; i++) {
        if(map.containsKey(nums[i])) {
            return new int[]{map.get(nums[i]), i};
        } else {
            map.put(target-nums[i], i);
        }
    }
    
    return new int[]{-1,-1};
}
```