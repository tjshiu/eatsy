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
    if (this.props.product) {
      this.setState(this.props.product);
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

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let productDetail = {};
    for (let key in this.state) {
      if (key === "uploadedFile") continue;
      productDetail[key] = this.state[key];
    }
    this.props
      .action(productDetail)
      .then(railsItem =>
        this.props.history.push(`products/${railsItem.entities.product.id}`)
      );
  }

  render() {
    return (
      <div>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
        >
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <div className="FileUpload">...</div>
        <div>
          {this.state.image_url === "" ? null : (
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.image_url} />
            </div>
          )}
        </div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Product Name:
            <input
              type="text"
              value={this.state.product_name}
              onChange={this.update("product_name")}
            />
          </label>
          <br />
          <label>
            Overview:
            <input
              type="text"
              value={this.state.overview}
              onChange={this.update("overview")}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>
          <br />
          <label>
            Cost:
            <input
              type="number"
              min="0.00"
              step="0.01"
              value={this.state.cost}
              onChange={this.update("cost")}
            />
          </label>
          <br />
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default ProductForm;
