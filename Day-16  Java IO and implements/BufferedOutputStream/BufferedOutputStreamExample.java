import java.io.*;

public class BufferedOutputStreamExample {
    public static void main(String[] args) throws IOException {
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("output.txt"));
        String text = "Hello, World! - Buffered";
        bos.write(text.getBytes());
        bos.close();
    }
}
