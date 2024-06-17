import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        // ArrayList example
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Hello");
        arrayList.add("World");
        System.out.println("ArrayList: " + arrayList);

        // LinkedList example
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Hello");
        linkedList.add("World");
        System.out.println("LinkedList: " + linkedList);

        // HashMap example
        HashMap<Integer, String> hashMap = new HashMap<>();
        hashMap.put(1, "Hello");
        hashMap.put(2, "World");
        System.out.println("HashMap: " + hashMap);
    }
}
