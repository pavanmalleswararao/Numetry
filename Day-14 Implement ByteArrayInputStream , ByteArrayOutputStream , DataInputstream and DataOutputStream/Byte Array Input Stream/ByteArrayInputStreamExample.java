import java.io.ByteArrayInputStream;

public class ByteArrayInputStreamExample {
    public static void main(String[] args) {
        byte[] data = { 1, 2, 3, 4, 5 };
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(data);
        int byteRead;
        while ((byteRead = byteArrayInputStream.read()) != -1) {
            System.out.print(byteRead + " ");
        }
    }
}
