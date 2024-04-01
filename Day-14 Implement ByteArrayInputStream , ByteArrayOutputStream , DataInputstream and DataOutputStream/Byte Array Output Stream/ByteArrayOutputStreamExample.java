import java.io.ByteArrayOutputStream;

public class ByteArrayOutputStreamExample {
    public static void main(String[] args) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        String data = "Hello, World!";
        byteArrayOutputStream.write(data.getBytes(), 0, data.length());


        byte[] byteArray = byteArrayOutputStream.toByteArray();

        System.out.println("Data written to ByteArrayOutputStream: " + new String(byteArray));

    }
}
