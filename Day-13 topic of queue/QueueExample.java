import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        // Primary Queue
        Queue<Integer> primaryQueue = new LinkedList<>();

        // Enqueue elements to primaryQueue
        primaryQueue.offer(1);
        primaryQueue.offer(2);
        primaryQueue.offer(3);

        // Dequeue elements from primaryQueue
        while (!primaryQueue.isEmpty()) {
            System.out.println("Primary Queue Element: " + primaryQueue.poll());
        }

        // Deque (Double-ended Queue)
        Deque<Integer> deque = new ArrayDeque<>();

        // Enqueue elements to the rear of the deque
        deque.offerLast(1);
        deque.offerLast(2);
        deque.offerLast(3);

        // Enqueue elements to the front of the deque
        deque.offerFirst(0);

        // Dequeue elements from the front of the deque
        while (!deque.isEmpty()) {
            System.out.println("Deque Element: " + deque.pollFirst());
        }

        // ArrayDeque
        ArrayDeque<Integer> arrayDeque = new ArrayDeque<>();

        // Enqueue elements to the rear of the arrayDeque
        arrayDeque.offerLast(1);
        arrayDeque.offerLast(2);
        arrayDeque.offerLast(3);

        // Enqueue elements to the front of the arrayDeque
        arrayDeque.offerFirst(0);

        // Dequeue elements from the front of the arrayDeque
        while (!arrayDeque.isEmpty()) {
            System.out.println("ArrayDeque Element: " + arrayDeque.pollFirst());
        }
    }
}
