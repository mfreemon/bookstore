export const bookReducer = (state= [], action) => {

  switch(action.type){
    case 'CREATE_BOOK_SUCCESS':
      console.log(action.book);
      return [...state, Object.assign({}, action.book)];

    //returns the state from the server when FETCH_BOOKS_SUCCESS
    // is successful
    case 'FETCH_BOOKS_SUCCESS':
      console.log(action.books);
      return action.books;

    default: return state;
  }
};


export const bookIdReducer = (state = [], action) => {
  switch (action.type){

    case 'FETCH_BOOK_BY_ID_SUCCESS':
      console.log(action.book + "marcus");
      return action.book;
      default: return state;
  }
};

export const cartReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TO_CART_SUCCESS':
      return [...state, Object.assign({}, action.book)];

    case 'FETCH_CART_SUCCESS':
      console.log(action.items)
      return action.items;

    default: return state;
  }
}
