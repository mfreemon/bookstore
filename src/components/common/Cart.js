import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Cart extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.getBooks();
  // }

  render () {
    // let { items } = props;
    // console.log(items)
    return (
      <div>
        <h1>Buy Some Shit </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>

        {this.props.items.map(item =>
          <ul>
            <li>{item.tite}</li>
            <li>{item.price}</li>
          </ul>
        )}
      </div>
    );
  };
}


const mapStateProps = (state) => {
  return {
    items: state.items
  }
}

// const mapDispatchProps = (dispatch) => {
//   return {
//     getBooks: dispatch(bookActions.fetchCart())
//   };
// };

export default connect(mapStateProps, mapDispatchProps)(Cart);
