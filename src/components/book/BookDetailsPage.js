import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import BookDetails from './BookDetails';
import * as bookActions from '../../actions/bookActions';



class BookDetailsPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.addedToCart = this.addedToCart.bind(this)
  }

  componentDidMount(){
    this.props.fetchBookId(this.props.params.id)
    console.log(this.props.params.id)


  }

  addedToCart(){

    this.props.addToCart(this.props.book)
  }

  render(){
    return (
      <div>
        <h1>Book Details Page</h1>
        <BookDetails
          addToCart={this.addedToCart}
          book={this.props.book}/>
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      book: state.book
        // state mappings here
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchBookId: bookId => dispatch(bookActions.fetchBookId(bookId)),
      addToCart:  book => dispatch(bookActions.addToCart(book))
        // actions mappings here
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
