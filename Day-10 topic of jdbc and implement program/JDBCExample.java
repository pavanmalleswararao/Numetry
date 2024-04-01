import java.sql.*;

public class JDBCExample {

    // JDBC URL for SQLite
    private static final String JDBC_URL = "jdbc:sqlite:test.db";

    public static void main(String[] args) {
        Connection connection = null;
        try {
            // Establish a connection to the database
            connection = DriverManager.getConnection(JDBC_URL);

            // Create a statement
            Statement statement = connection.createStatement();

            // Create a table
            String createTableSQL = "CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, name TEXT, position TEXT, salary REAL)";
            statement.executeUpdate(createTableSQL);
            System.out.println("Table created successfully.");

            // Insert data into the table
            String insertSQL = "INSERT INTO employees (name, position, salary) VALUES ('John Doe', 'Software Engineer', 50000.0)";
            statement.executeUpdate(insertSQL);
            System.out.println("Data inserted successfully.");

            // Retrieve data from the table
            String selectSQL = "SELECT * FROM employees";
            ResultSet resultSet = statement.executeQuery(selectSQL);

            // Process the result set
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String position = resultSet.getString("position");
                double salary = resultSet.getDouble("salary");

                // Print the result
                System.out.println("ID: " + id + ", Name: " + name + ", Position: " + position + ", Salary: " + salary);
            }

            // Close the result set and statement
            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                // Close the connection
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
