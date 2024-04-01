import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Stack<String> myStack = new Stack<>();


        myStack.push("A");
        myStack.push("B");
        myStack.push("C");


        System.out.println(myStack.pop());


        System.out.println(myStack.peek());

 
        for (String item : myStack) {
            System.out.println(item);
        }
    }
}
