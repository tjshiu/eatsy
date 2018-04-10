import React from "react";
import { Link } from 'react-router-dom';
import UserShowProducts from './user_show_products';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.props.fetchProducts(this.props.match.params.userId));
  }


  render() {
    debugger;
    if (!this.props.user || !this.props.products) return null;
    return(
      <div>
        <nav>
          <Link className="productsLink" to='/products'>See All Food ></Link>
        </nav>
        <div className='user-detail'>
          <img src={this.props.user.imageUrl} />
          {this.props.user.username}
        </div>
        <div className='user-detail-products-container'>
          <ul className='user-detail-products'>
            {this.props.user.productIds.map((id) =>
              (<UserShowProducts
                key={`user-show-detail-products-${id}`}
                product={this.props.products[id]}
                deleteProduct={this.props.deleteProduct}
                currentUserId={this.props.currentUser.id}
                userId={this.props.user.id}
                />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserShow;
