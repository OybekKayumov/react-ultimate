const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// TODO: The Array map Method - do not mutate the original array,
// return a new array based on the original one

// loop over an array
const x = [1,2,3,4,5].map(el => el * 2);
console.log('x: ', x);

const books = getBooks();

const titles = books.map(book => book.title);
titles;

//
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;  

  return goodreads + librarything;
}
//

// const essentialData = books.map(book => {
//   return {
//     title: book.title,
//     author: book.author,
//   }
// })

const essentialData = books.map(book => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}))

essentialData;


// TODO: The Array filter Method
const longBooksWithMovies = books
  .filter(book => book.pages > 500)
  .filter(book =>book.hasMovieAdaptation);  // returns if true
longBooksWithMovies;

const adventureBooks = books
  .filter(books => books.genres.includes('adventure'))
  .map(book => book.title);
adventureBooks;

// TODO: The Array reduce Method
const pagesAllBooks = books.reduce((acc, cur) => acc + cur.pages, 0);
pagesAllBooks; // 3227

// TODO: The Array sort Method
const arr = [3, 7, 1, 9, 6];
// in an ascending - по возрастанию - way, we do a minus b.
// a and b are always current and next values
// small number will come first
// const sorted = arr.sort((a, b) => a - b); 
// sorted;
arr; // arr also sorted, mutates original array;

// take copy and sort, it will not mutate the original array
const sortedNoMutate = arr.slice().sort((a,b) => a-b);
sortedNoMutate;
arr; // not changed

// descending sort
const sortedByPages = books.slice().sort((a,b) => b.pages - a.pages);
sortedByPages;

// TODO: Working With Immutable Arrays
// 1. add book obj to array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};

// spread all and add another object
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. delete book obj from array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
booksAfterDelete;