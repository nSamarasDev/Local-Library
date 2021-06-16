function findAccountById(accounts, id) {
  for(let i=0;i<accounts.length;i++){
    if(accounts[i].id === id){
      return accounts[i];
    }
  }
}

var left = -1;
var right = 1;
function sortAccountsByLastName(accounts) {
return accounts.sort((a,b) => a.name.last<b.name.last ? left : right );
}

function numberOfBorrows(account, books) { 
  let total = 0;
  for (let index in books){
    const borrowed = books[index].borrows.filter(book=> book.id === account.id).length;
    total += borrowed;
  }
  return total;
}


function booksInPossession(account, books, authors) {
  let arr = [];
  for (let index in books){
    let booksOut = books[index].borrows.some(book=> book.id === account.id && book.returned === false);
      if (booksOut){
        let bookIndex = books[index];
        bookIndex.author = authors.find(authorFound=> authorFound.id === bookIndex.authorId);
        arr.push(bookIndex);
      }
  }
  return arr;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
