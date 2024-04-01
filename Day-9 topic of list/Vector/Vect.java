import java.util.Vector;

public class Vect {
    public static void main(String[] args) {
        Vector<Integer> myVector = new Vector<>();


        myVector.add(5);
        myVector.add(10);
        myVector.add(15);

        System.out.println(myVector.get(2));

       
        for (Integer num : myVector) {
            System.out.println(num);
        }
    }
}
