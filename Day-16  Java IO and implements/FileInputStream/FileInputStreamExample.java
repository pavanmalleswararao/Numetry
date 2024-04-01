import java.io.*;

public class FileInputStreamExample {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("input.txt");
        int data;
        while ((data = fis.read()) != -1) {
            // Process the data
            System.out.print((char) data);
        }
        fis.close();
    }
}
