class CreateListItem {
    constructor(title, description, dueDate, priority, isComplete = false) {
        (this.title = title),
            (this.description = description),
            (this.dueDate = dueDate),
            (this.priority = priority),
            (this.isComplete = isComplete);
    }
}

const read = new CreateListItem('Read book', 'The Great Gatsby', 1002, 'low');

console.log(read);
console.log(read.title);
