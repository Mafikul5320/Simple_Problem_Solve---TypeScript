const formatValue = (input: unknown) => {
    if (typeof input === "string") {
        return input.toLocaleUpperCase()
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        return !input
    }
}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));


const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        const characters = value.split("").length;
        return characters;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);

// console.log(person1.getDetails());
// console.log(person2.getDetails());


type Rating = {
    title: string,
    rating: number
}

const filterByRating = (arr: Rating[]): Rating[] => {
    return (arr.filter(rat => rat.rating >= 4))
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (user: User[]): User[] => {
    return (user.filter(activeUser => activeUser.isActive === true))
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {

    const available = book.isAvailable ? "Yes" : "No"

    return console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, isAvailable: ${available}`)
};

