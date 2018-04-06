import { connect } from "react-redux";
import ProductForm from './product_form';
import { createProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  product: {
    productName: "",
    userId: state.session.currentUser,
    overview: "",
    description: "",
    cost: 0.00,
    imageUrl: ""},
  formType: "Create Product"
});

const mapDispatchToProps = dispatch => {
  action: (product) => dispatch(createProduct(product));
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
