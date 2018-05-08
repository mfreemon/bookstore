import Axios from 'axios';
// API URL
const apiUrl = "http://598111425b25f700119cab2d.mockapi.io/bookstore";
const bookCart = 'http://598111425b25f700119cab2d.mockapi.io/bookCart';

export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  };
};

//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
    });
  };
};

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book: book
  };
};

export const createBook = (book) => {
  return(dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
    });
  };
};


export const fetchBookIdSuccess = (book) => {
  return {
    type: 'FETCH_BOOK_BY_ID_SUCCESS',
    book: book
  };
};


export const fetchBookId = (bookId) => {
    console.log(bookId + "me here");
  return(dispatch) => {
    return Axios.get(apiUrl + '/' + bookId)
        .then(response => {
          console.log(response.data)
        dispatch(fetchBookIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
    });
  };
};

export const addToCartSuccess = (book) => {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    book: book
  }
}

export const addToCart = (bookId) =>{
  console.dir(bookId)
  return(dispatch) => {
    return Axios.post(bookCart, bookId)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      });
  };
};


export const fetchCartSuccess = (items)=> {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  }
}

export const fetchCart = () => {
  return(dispatch) => {
    return Axios.get(bookCart)
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
        })
        .catch(error =>
          {throw(error)
      });
  };
};
