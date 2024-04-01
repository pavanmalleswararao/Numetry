import java.io.*;

public class FileOutputStreamExample {
    public static void main(String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream("output.txt");
        String text = "Hello, World!";
        fos.write(text.getBytes());
        fos.close();
    }
}
