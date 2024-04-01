import java.util.ArrayList;

public class Alist {
    public static void main(String[] args) {
        ArrayList<Integer> myArrayList = new ArrayList<>();

        // Adding elements
        myArrayList.add(10);
        myArrayList.add(20);
        myArrayList.add(30);

        // Accessing elements
        System.out.println(myArrayList.get(1)); // Output: 20

        // Iterating through the ArrayList
        for (Integer num : myArrayList) {
            System.out.println(num);
        }
    }
}
