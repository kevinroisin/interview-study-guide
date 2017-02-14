## Common Data Structures in Java

```java
// String
String s = "kevin";
s.length(); // -> int
String substring1 = s.substring(2,3);
String substring2 = s.substring(2);
int indexOf = s.indexOf('v');

// primitive Array
String[] a = new String[2];
a[0] = "kevin";
int aLength = a.length;

// LinkedList
LinkedList<String> ll = new LinkedList<String>();
boolean llAdded = ll.add("hi");
boolean llAdded2 = ll.add("kevin");
String llFirst = ll.getFirst();
String llLast = ll.getLast();
String llAtIndex = ll.get(1);
String llRemovedHead = ll.removeFirst();
String llRemovedAtIndex = ll.remove(0);
Iterator<String> iter = ll.iterator();
while(iter.hasNext()) {
    String next = iter.next();
}

// ArrayList
ArrayList<String> al = new ArrayList<String>();
boolean alAdded = al.add("hello");
String alAtIndex = al.get(0);
int alSize = al.size();
Iterator<String> alIter = al.iterator();
while(alIter.hasNext()) {
    String next = iter.next();
}

// HashMap
HashMap<String, String> hm = new HashMap<String, String>();
String hmPrevOrNull = hm.put("kevin", "roisin");
String hmGet = hm.get("kevin");
String hmRemovedVal = hm.remove("kevin");
boolean hmContainsKey = hm.containsKey("kevin");
int hmSize = hm.size();
Set<String> keySet = hm.keySet();
for(String key : keySet) {
    String hmGetInKeySet = hm.get(key);
}

// HashSet
HashSet<String> hs = new HashSet<String>();
boolean hsDidNotAlreadyContain = hs.add("kevin");
boolean hsRemovedVal = hs.remove("kevin");
boolean hsContains = hs.contains("kevin");
boolean hsIsEmpty = hs.isEmpty();

// Queue
Queue<String> q = new LinkedList<String>();
boolean qAdded = q.add("kevin");
String qPolled = q.poll();
String qPeeked = q.peek();
boolean qIsEmpty = q.isEmpty();

// Stack
Stack<String> stack = new Stack<String>();
String stackValPushedToStack = stack.push("kevin");
String stackPopped = stack.pop();
String stackPeeked = stack.peek();
boolean stackIsEmpty = stack.isEmpty();

// Stack via Deque
Deque<String> dequeStack = new LinkedList<String>();
dequeStack.push("kevin"); // method doesn't return anything (void)
String dequeStackPopped = dequeStack.pop();
String dequeStackPeeked = dequeStack.peek();
boolean dequeStackIsEmpty = dequeStack.isEmpty();
```