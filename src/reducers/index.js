// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {bookReducer, bookIdReducer, cartReducer} from './bookReducers';

 export default combineReducers({
   books: bookReducer,
   book: bookIdReducer,
   items: cartReducer

   // More reducers go here if there are
 });
