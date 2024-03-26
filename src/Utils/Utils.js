import toast from 'react-hot-toast';
// wish book part
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem('wishBook');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const wishBook = book => {
  let alreadyReadBooks = getReadBooks();
  const isRead = alreadyReadBooks.find(b => b === book.bookId);
  if (isRead) {
    return toast.error("Already read book can't be wished!");
  }
  let books = getBooks();
  const isExist = books.find(b => b === book.bookId);
  if (isExist) {
    return toast.error('The Book is already in your wishlist!');
  }
  books.push(book.bookId);
  localStorage.setItem('wishBook', JSON.stringify(books));
  toast.success('The Book is added to your wishlist!');
};

// read book part

export const getReadBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem('readBook');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const readBook = book => {
  let oldBooks = getReadBooks();
  const isExist = oldBooks.find(b => b === book.bookId);
  if (isExist) {
    return toast.error('This book is already read!');
  }
  oldBooks.push(book.bookId);
  localStorage.setItem('readBook', JSON.stringify(oldBooks));
  deleteBook(book.bookId);
  toast.success('The Book is successfully marked as read!');
};

//delete part
export const deleteBook = id => {
  let books = getBooks();
  const remaining = books.filter(b => b !== id);
  localStorage.setItem('wishBook', JSON.stringify(remaining));
};
