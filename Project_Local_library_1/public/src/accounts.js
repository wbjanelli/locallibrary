const {findAuthorById} = require ("./books.js")

function findAccountById(accounts, id) {
  const foundElement = accounts.find((accountsObj,idx)=>{
    return accountsObj.id === id
  })
  return foundElement;
}

function sortAccountsByLastName(accounts=[]) {
  accounts.sort((personA,personB)=>{
    return personA.name.last.toLowerCase() < personB.name.last.toLowerCase() ? -1 : 1;
  })
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (const book of books) {
    for (const borrow of book.borrows) {
      if (borrow.id === account.id) {
        totalBorrows++;
      }
    }
  }
  return totalBorrows;
}


function getBooksPossessedByAccount(account={}, books=[], authors=[]) {
  const result = []
  const {id} = account;
  books.forEach((bookObj)=>{
  const {borrows,authorId} = bookObj
  const recentBorrower = borrows[0]
  if (recentBorrower.id === id && recentBorrower.returned === false){
  const author = findAuthorById (authors, authorId)
   bookObj.author = author
    result.push (bookObj)
    }
  })
  return result;
  }




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
