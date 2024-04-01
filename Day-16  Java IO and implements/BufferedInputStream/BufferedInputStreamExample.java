import java.io.*;

public class BufferedInputStreamExample {
    public static void main(String[] args) throws IOException {
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("input.txt"));
        int data;
        while ((data = bis.read()) != -1) {
            // Process the data
            System.out.print((char) data);
        }
        bis.close();
    }
}
