import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        List<String> myList = new ArrayList<>();

        myList.add("Apple");
        myList.add("Banana");
        myList.add("Orange");

        // Accessing elements
        System.out.println(myList.get(0)); 


        for (String fruit : myList) {
            System.out.println(fruit);
        }
    }
}
