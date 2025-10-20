let books = [book1, book2, book3];

let book1 = {
    title: "speakingjavascript",
    author: "Axel Rauschmayer",
    pages: 460
};
let book2 = {
    title: "programingjavascript",
    author: "Flanagan",
    pages: 657
};
let book3 = {
    title: "understanding ECMAScript 6",
    authour: "Nicholas C. Zakas",
    pages: 352
}
//adding a new object to the array
books.push(book4);

let book4 = { title: "learing javascript Design patterns",
    author: "Addy Osmani",
    pages: 254 
};
console.log(books.length);
console.log(books);
//removing an object from the array
//
books.slice(3,4)

books.shift(0,1);

console.log(books.length);
console.log(books);

//creating an object that contains an array of objects

let newbooks = {
    };
let books2 = {
    title: "programingjavascript",
    author: "Flanagan",
    pages: 657
};
let books3 = {
    title: "understanding ECMAScript 6",
    authour: "Nicholas C. Zakas",
    pages: 352
};
let books4 = { title: "learing javascript Design patterns",
    author: "Addy Osmani",
    pages: 254 
};

//displaying the array of objects

newbooks.length = 3;
newbooks[0] = book2;
newbooks[1] = book3;
newbooks[2] = book4;
console.log(newbooks);
console.log(newbooks[0]);
console.log(newbooks[1]);
console.log(newbooks[2]);
