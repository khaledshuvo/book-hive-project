import toast from 'react-hot-toast';
// wish book part
export const getWishedBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem('wishBook');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const wishBook = bookId => {
  let alreadyReadBooks = getReadBooks();
  const isRead = alreadyReadBooks.find(b => b === bookId);
  if (isRead) {
    return toast.error("Already read book can't be wished!");
  }
  let books = getWishedBooks();
  const isExist = books.find(b => b === bookId);
  if (isExist) {
    return toast.error('The Book is already in your wishlist!');
  }
  books.push(bookId);
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

export const readBook = bookId => {
  let oldBooks = getReadBooks();
  const isExist = oldBooks.find(b => b === bookId);
  if (isExist) {
    return toast.error('This book is already read!');
  }
  oldBooks.push(bookId);
  localStorage.setItem('readBook', JSON.stringify(oldBooks));
  deleteBook(bookId);
  toast.success('The Book is successfully marked as read!');
};

//delete part
export const deleteBook = id => {
  let books = getWishedBooks();
  const remaining = books.filter(b => b !== id);
  localStorage.setItem('wishBook', JSON.stringify(remaining));
};

//Id related
export const getId = () => {
  let page = [];
  const storedBooks = localStorage.getItem('visiting');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const setId = bookId => {
  let oldBooks = getReadBooks();
  const isExist = oldBooks.find(b => b === bookId);
  if (isExist) {
    return toast.error('This book is already read!');
  }
  oldBooks.push(bookId);
  localStorage.setItem('visiting', JSON.stringify(oldBooks));
  deleteBook(bookId);
  toast.success('The Book is successfully marked as read!');
};

export const deleteId = id => {
  let books = getWishedBooks();
  const remaining = books.filter(b => b !== id);
  localStorage.setItem('visiting', JSON.stringify(remaining));
};
