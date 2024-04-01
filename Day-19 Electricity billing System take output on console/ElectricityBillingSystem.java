import java.util.Scanner;

public class ElectricityBillingSystem {

    public static double calculateBill(int units) {
        double billAmount = 0;
        if (units <= 100) {
            billAmount = units * 1.50;
        } else if (units <= 200) {
            billAmount = 100 * 1.50 + (units - 100) * 2.00;
        } else if (units <= 300) {
            billAmount = 100 * 1.50 + 100 * 2.00 + (units - 200) * 3.00;
        } else {
            billAmount = 100 * 1.50 + 100 * 2.00 + 100 * 3.00 + (units - 300) * 3.50;
        }
        return billAmount;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to the Electricity Billing System");
        System.out.print("Enter the number of units consumed: ");
        int units = scanner.nextInt();

        if (units < 0) {
            System.out.println("Invalid input! Units consumed cannot be negative.");
            return;
        }

        double billAmount = calculateBill(units);
        System.out.println("Your bill amount is: $" + billAmount);
        scanner.close();
    }
}
