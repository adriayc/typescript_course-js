// CLASSES - PUBLIC AND PRIVATE MODIFIERS
class Book {
  // Modifies (public and private)
  public readonly title: string; // Read only
  public author: string;
  private checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  // Methods
  checkOut() {
    // this.checkedOut = true;
    this.checkedOut = this.toggleCheckedOutStatus();
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
// deepWork.checkedOut = true; // Error
deepWork.checkOut();
console.log(deepWork.isCheckedOut());
console.log(deepWork);
