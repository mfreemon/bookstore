import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';
import BookDetailsPage from './components/book/BookDetailsPage';
import Cart from './components/common/Cart';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path = "/about" component={About} />
    <Route path = "/books" component={Book} />
    <Route path = "/books-details/:id" component={BookDetailsPage}/>
    <Route path = "/cart" component={Cart}/>
  </Route>
);
