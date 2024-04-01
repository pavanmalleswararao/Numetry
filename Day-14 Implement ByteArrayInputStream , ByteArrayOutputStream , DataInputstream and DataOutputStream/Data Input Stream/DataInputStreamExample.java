import java.io.ByteArrayInputStream;
import java.io.DataInputStream;

public class DataInputStreamExample {
    public static void main(String[] args) throws Exception {
        byte[] data = { 72, 101, 108, 108, 111 };
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(data);
        DataInputStream dataInputStream = new DataInputStream(byteArrayInputStream);
        while (dataInputStream.available() > 0) {
            System.out.print((char) dataInputStream.readByte());
        }
    }
}
