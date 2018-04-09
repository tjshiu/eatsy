import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "zfgcp1tk";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dwanjkcku/upload";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      product_name: "",
      user_id: this.props.userId,
      overview: "",
      description: "",
      image_url: "",
      cost: 0.0
    };
  }

  componentDidMount() {
    if (this.props.fetchProduct) {
      this.props.fetchProduct(this.props.match.params.productId).then(() => this.setState({
        product_name: this.props.product.productName,
        overview: this.props.product.overview,
        description: this.props.product.description,
        image_url: this.props.product.imageUrl,
        cost: this.props.product.cost
      }));
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let productDetail = {};
    for (let key in this.state) {
      if (key === "uploadedFile" || key ==='product') continue;
      productDetail[key] = this.state[key];
    }
    this.props
      .action(productDetail)
      .then(entities =>
        this.props.history.push(`/products/${entities.product.id}`)
      );
  }

  render() {
    console.log(this.state);

    return (
      <div className="whole-product-form">
        <h1>{this.props.formType}</h1>
        <div className="product-form-container">
          <div className="product-image-upload">
            <h1>Photo:</h1>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}
            >
              <div className="drop-zone-instructions">
                <div>Add a Primary Photo</div>
                <div>Drop an image or click to select a file to upload.</div>
                <br />
                <i className="fa fa-camera" aria-hidden="true" />
              </div>
            </Dropzone>
            <div>
              {this.state.image_url === "" ? null : (
                <div className="image-upload">
                  <div>
                    <img src={this.state.image_url} />
                  </div>
                  {(this.props.formType=== "Create A Product") ? <div>{this.state.uploadedFile.name}</div> : null}
                </div>
              )}
            </div>
          </div>
          <form className="product-form" onSubmit={this.handleSubmit}>
            <div className="product-errors-container">
              {this.renderErrors()}
            </div>
            <label>
              Product Name: <div className="required"> *</div>
              <div>
                <input
                  type="text"
                  value={this.state.product_name}
                  onChange={this.update("product_name")}
                />
              </div>
            </label>
            <label>
              Overview: <div className="required"> *</div>
              <div>
                <textarea
                  className="product-form-overview"
                  value={this.state.overview}
                  onChange={this.update("overview")}
                />
              </div>
            </label>
            <label>
              Description: <div className="required"> *</div>
              <div>
                <textarea
                  className="product-form-description"
                  value={this.state.description}
                  onChange={this.update("description")}
                />
              </div>
            </label>
            <label>
              Cost: $
              <input
                id="cost"
                type="number"
                min="0.00"
                step="0.01"
                value={this.state.cost}
                onChange={this.update("cost")}
              />{" "}
              <div className="required"> *</div>
            </label>
            <br />
            <input id="form-submit" type="submit" value={this.props.formType} />
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;
