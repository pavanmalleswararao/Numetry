import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;

public class DataOutputStreamExample {
    public static void main(String[] args) throws Exception {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        DataOutputStream dataOutputStream = new DataOutputStream(byteArrayOutputStream);
        dataOutputStream.writeInt(42);
        dataOutputStream.writeUTF("Hello, World!");
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        for (byte b : byteArray) {
            System.out.print(b + " ");
        }
    }
}
