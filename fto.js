// Define a Task class to represent individual tasks
class Task {
    constructor(name, dueDate) {
      this.name = name;
      this.dueDate = dueDate;
    }
  }
  
  // Define a Scheduler class to manage tasks
  class Scheduler {
    constructor() {
      this.tasks = [];
    }
  
    // Function to add a new task with a due date
    addTask(name, dueDate) {
      const newTask = new Task(name, dueDate);
      this.tasks.push(newTask);
      console.log(`Task "${name}" added with due date ${dueDate}`);
    }
  
    // Function to display all tasks
    displayTasks() {
      console.log("Tasks in Scheduler:");
      if (this.tasks.length === 0) {
        console.log("No tasks added yet.");
      } else {
        this.tasks.forEach(task => {
          console.log(`- ${task.name} (Due: ${task.dueDate})`);
        });
      }
    }
  }
  
  // Example usage
  const scheduler = new Scheduler();
  scheduler.addTask("Complete project proposal", "2024-03-15");
  scheduler.addTask("Buy groceries", "2024-03-12");
  scheduler.addTask("Call mom", "2024-03-11");
  
  scheduler.displayTasks();

  ////Create a function to display tasks sorted by their due dates////
  function displayTasksSortedByDueDate(tasks) {
    // Sort tasks by due date
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    // Display sorted tasks
    tasks.forEach(task => {
        console.log(`Task: ${task.name} - Due Date: ${task.dueDate}`);
    });
}

// Example usage:
const tasks = [
    { name: "Task 1", dueDate: "2024-03-15" },
    { name: "Task 2", dueDate: "2024-03-12" },
    { name: "Task 3", dueDate: "2024-03-18" }
];

displayTasksSortedByDueDate(tasks);

////Develop a function to update task details or mark tasks as completed////
///////Allow users to remove tasks from the scheduler./////////////
// Define a Book class
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
  
  // Define a Library class
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Function to add a book to the library
    addBook(title, author, isbn) {
      const newBook = new Book(title, author, isbn);
      this.books.push(newBook);
      console.log(`${newBook.title} by ${newBook.author} added to the library.`);
    }
  
    // Function to display all books in the library
    displayBooks() {
      if (this.books.length === 0) {
        console.log("The library is empty.");
      } else {
        console.log("Books in the library:");
        this.books.forEach(book => {
          console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        });
      }
    }
  }
  
  // Example usage
  const myLibrary = new Library();
  myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780141182636");
  myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "0061120081");
  myLibrary.displayBooks();
  
  