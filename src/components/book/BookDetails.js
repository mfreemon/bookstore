import React, {PropTypes} from 'react';
import { Link} from 'react-router'

const BookDetails = (props) => {
  let { book, addToCart } = props;
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Title of Book</h4>
          <ul>
            <li><strong>Author: </strong>{book.id}</li>
            <li><strong>Author: </strong>{book.author}</li>
            <li><strong>Price: </strong>{book.price}</li>

            <br/>
            <Link to={`/cart/`}>
              <button onClick={addToCart} className="btn btn-primary">Buy</button>
            </Link>
          </ul>
        </div>
      </div>
    );
};

export default BookDetails;
