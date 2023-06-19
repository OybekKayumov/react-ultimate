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

//TODO: Destructuring
const book = getBook (1);
// const book = getBook (2);

// const title = book.title;
// const author = book.author;
// title; 
// author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(': ', author, title, genres);

//todo: array destructuring
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;

// console.log(': ', primaryGenre, secondaryGenre);

//TODO: Rest/Spread Operator
// get all the other elements in array after 0 and 1 
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(': ', primaryGenre, secondaryGenre, otherGenres);
// science fiction humor [ 'speculative fiction', 'short stories', 'fantasy' ]

// spread
// const newGenres = [genres, 'epic fantasy'];
const newGenres = [...genres, 'epic fantasy'];
newGenres;

//todo: Objects
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: '2001-12-19',
  
  // Overwriting an existing property
  pages: 1210,
}

updatedBook;
// So whenever we want to do this, the spread-operator original object needs to be first.

// adding a new property and then overriding an existing property.
// this is going to be really important when we work with React
// because when we want to update objects in state,
// we will need to use this technique.

// But for now, just keep in mind that when we want to create a new object
// and then add new properties to it or override existing ones
// this is how we do it.
// So we use the spread operator
// and the same is true for a rest.

// TODO: Template Literals
const summary = `${title}, a ${pages}-pages long book, written by ${author} and published in ${publicationDate.split("-")[0]}`;
summary;
// 1954-07-29 --> .split("-")[0]

// TODO: Ternaries Instead of if/else Statements
const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000'
pagesRange;

// TODO: Arrow Functions
// fn declaration
function getYear(str) {
  return str.split('-')[0]
}

const getYearArrow = str => str.split('-')[0]

console.log(': ', getYearArrow(publicationDate));

