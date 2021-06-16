function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let count = 0;
  for(let i=0;i<books.length;i++){
    let borrow = books[i].borrows;
    for(let j =0;j<borrow.length;j++){
      let status = borrow[j].returned;
      if(status === false){
        count++
      }
    }
  }
  return count;
}

function mostCommonGenres(books) {
  let genreList = books.map((book) => book.genre)
  let filteredGenreList = Array.from(new Set(genreList));
  let newObjectList = filteredGenreList.reduce((acc,genre_f) => {
    let newObject = {name: genre_f, count: books.reduce((count, book) =>{
      if (book.genre === genre_f) count += 1;
      return count;
    }, 0)};
    // console.log(newObject);
    acc.push(newObject);
    return acc;
  }, []);
  let sortedList = newObjectList.sort((first,second) =>(first.count - second.count)*-1);
  // console.log(sortedList);
  return sortedList.splice(0,5);
  // console.log(genreList);
  // console.log(filteredGenreList);
}


function mostPopularBooks(books) {
let book = helperForPopBook(books);
return book;
}

function helperForPopBook(books){
  let arr = [] 
  for (let i=0;i< books.length; i++){ 
  let novels = {} 
  novels.name = books[i].title 
  novels.count = books[i].borrows.length 
  arr.push(novels) } 
  const final = arr.sort((book1, book2)=> book1.count<book2.count?1:-1) 
  return final.slice(0,5)
}


function mostPopularAuthors(books, authors) {
let arr = []
  //let author = {}
  for (let i=0;i<authors.length;i++){
    let author = {}
    author.name = `${authors[i].name.first} ${authors[i].name.last}`
    author.count = 0
    for (let j=0; j<books.length; j++){
      //let bookArr=[]
      if (books[j].authorId===authors[i].id){
        //bookArr.push(...books[j].borrows)
        author.count += books[j].borrows.length
      }
    }
    arr.push(author)
  }
  const final = arr.sort((auth1, auth2)=> auth1.count < auth2.count ? 1:-1)
  return final.slice(0,5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
