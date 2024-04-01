import java.util.LinkedList;

public class Llist {
    public static void main(String[] args) {
        LinkedList<String> myLinkedList = new LinkedList<>();


        myLinkedList.add("John");
        myLinkedList.add("Doe");
        myLinkedList.add("Jane");


        System.out.println(myLinkedList.getFirst());
 
        for (String name : myLinkedList) {
            System.out.println(name);
        }
    }
}
