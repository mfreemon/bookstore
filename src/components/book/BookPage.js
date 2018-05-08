import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router'
import BookForm from './BookForm';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    super(props);

    this.submitBook = this.submitBook.bind(this);
  }

  submitBook(input) {
    this.props.createBook(input);
  }



  render(){
    return (
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b, i) =>
            <Link to={`/books-details/${b.id}`}><li key={i}>{b.book}</li></Link>
          )}
        </ul>
        <div>
          <h3>New Book</h3>
          <BookForm submitformBook={this.submitBook}/>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateProps = (state) => {
  return {
    // You can now say this.props.books
    books: state.books
  };
};

// Maps actions to props
const mapDispatchProps = (dispatch) => {
  // You can now say this.props.createBook
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  };
};

export default connect(mapStateProps, mapDispatchProps)(Book);
