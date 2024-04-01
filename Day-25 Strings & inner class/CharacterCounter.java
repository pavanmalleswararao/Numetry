public class CharacterCounter {
    public static void main(String[] args) {
        String inputString = "Hello World! 123"; 
        int alphabets = 0, digits = 0, specialSymbols = 0;

        for (char ch : inputString.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabets++;
            } else if (Character.isDigit(ch)) {
                digits++;
            } else {
                specialSymbols++;
            }
        }

        System.out.println("Alphabets: " + alphabets);
        System.out.println("Digits: " + digits);
        System.out.println("Special Symbols: " + specialSymbols);
    }
}
