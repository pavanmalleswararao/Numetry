public class Library {

    public class Book {
        private String title;
        private String author;
        private int yearPublished;

        public Book(String title, String author, int yearPublished) {
            this.title = title;
            this.author = author;
            this.yearPublished = yearPublished;
        }

        public void displayDetails() {
            System.out.println("Book: " + title);
            System.out.println("Author: " + author);
            System.out.println("Year Published: " + yearPublished);
        }
    }

    public static void main(String[] args) {
        Library myLibrary = new Library();

  
        Library.Book myBook = myLibrary.new Book("The Alchemist", "Paulo Coelho", 1988);

        myBook.displayDetails();
    }           
}
