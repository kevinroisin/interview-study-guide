## Common Data Structures in Java

### Strings
```java
String s = "kevin";
s.length(); // -> int

// substrings
String substring1 = s.substring(2,3);
String substring2 = s.substring(2);
s.substring(0, pos) + s.substring(pos + 1);  // include 0, up to but NOT including pos

// indexes / search
String strOrig = "Hello world ,Hello Reader";
int indexOf = strOrig.indexOf('w'); // 6
int lastIndex = strOrig.lastIndexOf("Hello");  // 13

// comparisons
s1.equals(s2)  // returns true or false based on character sequence
str.compareTo(anotherString);  // returns the ascii difference of first odd characters of compared strings
str.compareToIgnoreCase(anotherString);

// replacements
str.replace( 'H','W' ) 
str.replaceFirst("He", "Wa") 
str.replaceAll("He", "Ha")

// splitting
String str = "jan-feb-march";
String delimeter = "-";
String[] temp = str.split(delimeter);

// convert to char array
char[] try1 = str.toCharArray();
```

### Primitive Arrays
```java
// primitive Array
String[] a = new String[2];
a[0] = "kevin";
int aLength = a.length;
```

### ArrayList
```java
// ArrayList
ArrayList<String> al = new ArrayList<String>();
boolean alAdded = al.add("hello");
String alAtIndex = al.get(0);
int alSize = al.size();
Iterator<String> alIter = al.iterator();
while(alIter.hasNext()) {
    String next = iter.next();
}
```

### HashMap
```java
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
```

### HashSet
```java
// HashSet
HashSet<String> hs = new HashSet<String>();
boolean hsDidNotAlreadyContain = hs.add("kevin");
boolean hsRemovedVal = hs.remove("kevin");
boolean hsContains = hs.contains("kevin");
boolean hsIsEmpty = hs.isEmpty();
```

### LinkedList
```java
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
```

### Queue
```java
// Queue
Queue<String> q = new LinkedList<String>();
boolean qAdded = q.add("kevin");
String qPolled = q.poll();
String qPeeked = q.peek();
boolean qIsEmpty = q.isEmpty();
```

### Stack
```java
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