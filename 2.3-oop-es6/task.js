class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(myState) {
        if (myState < 0) {
            this._state = 0;
        } else if (myState > 100) {
            this._state = 100;
        } else {
            this._state = myState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        
        return null;
    }
}

class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!this[subject]) {
            this[subject] = [];
        }
        if ((grade >= 1) && (grade <= 5)) {
            this[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
        
        return this[subject].length;
    }

    getAverageBySubject(subject) {
        if ((this[subject]) && (this[subject].length != 0)) {
            let sumGrade = 0;
            for (let i = 0; i < this[subject].length; i++) {
                sumGrade += this[subject][i];
            }
            return sumGrade / this[subject].length;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let sumGrade = 0;
        let numSubject = 0;
        for (let prop in this) {
            if (prop != 'name') {
                sumGrade += this.getAverageBySubject(prop);
                numSubject ++;
            }
        }
        return (numSubject == 0) ? 0 : (sumGrade / numSubject);
    }
}

let library, printItem;

library = new Library('Библиотека имени Ленина');
printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
library.addBook(printItem);

const firstBook = library.giveBookByName('Типовой школьный журнал');

console.log(firstBook.name);