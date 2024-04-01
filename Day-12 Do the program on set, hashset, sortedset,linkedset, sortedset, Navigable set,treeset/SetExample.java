import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        // HashSet
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Orange");
        hashSet.add("Apple"); // Duplicate, will be ignored

        System.out.println("HashSet: " + hashSet);

        // SortedSet (TreeSet)
        SortedSet<Integer> sortedSet = new TreeSet<>();
        sortedSet.add(5);
        sortedSet.add(2);
        sortedSet.add(8);
        sortedSet.add(2); // Duplicate, will be ignored

        System.out.println("SortedSet: " + sortedSet);

        // LinkedHashSet
        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("Pen");
        linkedHashSet.add("Pencil");
        linkedHashSet.add("Eraser");
        linkedHashSet.add("Pen"); // Duplicate, will be ignored

        System.out.println("LinkedHashSet: " + linkedHashSet);

        // NavigableSet (TreeSet)
        NavigableSet<Double> navigableSet = new TreeSet<>();
        navigableSet.add(3.5);
        navigableSet.add(1.2);
        navigableSet.add(7.8);
        navigableSet.add(1.2); // Duplicate, will be ignored

        System.out.println("NavigableSet: " + navigableSet);

        // TreeSet (implements NavigableSet)
        TreeSet<String> treeSet = new TreeSet<>();
        treeSet.add("Zebra");
        treeSet.add("Lion");
        treeSet.add("Tiger");
        treeSet.add("Lion"); // Duplicate, will be ignored

        System.out.println("TreeSet: " + treeSet);
    }
}
