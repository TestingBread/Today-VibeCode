import java.util.Scanner;

public class ElectricityBillCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter electricity consumption (kWh): ");
        double units = scanner.nextDouble();

        double bill = calculateBill(units);
        double serviceFee = 50.0;
        double totalBill = bill + serviceFee;

        System.out.printf("Electricity units: %.2f kWh\n", units);
        System.out.printf("Calculation breakdown: %.2f THB\n", bill);
        System.out.printf("Service fee: %.2f THB\n", serviceFee);
        System.out.printf("Total electricity bill: %.2f THB\n", totalBill);

        scanner.close();
    }

    public static double calculateBill(double units) {
        double bill = 0;

        if (units <= 150) {
            bill = units * 3.50;
        } else if (units <= 400) {
            bill = (150 * 3.50) + (units - 150) * 4.20;
        } else {
            bill = (150 * 3.50) + (250 * 4.20) + (units - 400) * 5.00;
        }

        return bill;
    }
}
