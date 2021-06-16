const { expect } = require("chai");
const {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
} = require("../public/src/home.js");

const authorsFixture = require("./fixtures/authors.fixture");
const booksFixture = require("./fixtures/books.fixture");

describe("Home Page", () => {
  let authors;
  let books;

  beforeEach(() => {
    authors = authorsFixture.slice();
    books = booksFixture.slice();
  });

  describe("totalBooksCount()", () => {
    it("should return the total number of books in the array", () => {
      const actual = totalBooksCount([{}, {}]);
      expect(actual).to.equal(2);
    });

    it("should return zero if the array is empty", () => {
      const actual = totalBooksCount([]);
      expect(actual).to.equal(0);
    });
  });

  describe("totalAccountsCount()", () => {
    it("should return the total number of accounts in the array", () => {
      const actual = totalAccountsCount([{}, {}]);
      expect(actual).to.equal(2);
    });

    it("should return zero if the array is empty", () => {
      const actual = totalAccountsCount([]);
      expect(actual).to.equal(0);
    });
  });

  describe("booksBorrowedCount()", () => {
    it("should return the total number of books that are currently borrowed", () => {
      const actual = booksBorrowedCount(books);
      expect(actual).to.equal(6);
    });
  });

  describe("mostCommonGenres()", () => {
    it("should return an ordered list of most common genres", () => {
      const actual = mostCommonGenres(books);
      const [first, second] = [
        { name: "Science", count: 3 },
        { name: "Classics", count: 2 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = mostCommonGenres(books);
      expect(actual.length).to.equal(5);
    });
  });

  describe("mostPopularBooks()", () => {
    it("should return an ordered list of most popular books", () => {
      const actual = mostPopularBooks(books);
      const [first, second] = [
        { name: "sit eiusmod occaecat eu magna", count: 11 },
        { name: "ullamco est minim", count: 5 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = mostPopularBooks(books);
      expect(actual.length).to.equal(5);
    });
  });

  describe("mostPopularAuthors()", () => {
    it("should return an ordered list of most popular authors", () => {
      const actual = mostPopularAuthors(books, authors);
      const [first, second] = [
        { name: "Susanne Lawson", count: 11 },
        { name: "Matthews Sanders", count: 5 },
      ];
      expect(actual[0]).to.eql(first);
      expect(actual[1]).to.eql(second);
    });

    it("should limit the list to the top five", () => {
      const actual = mostPopularAuthors(books, authors);
      expect(actual.length).to.equal(5);
    });
  });
});
