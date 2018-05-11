import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Footer-Container">
        <nav className="Footer">
          <div className="FooterLeft">
            <Link to="/" className="header-link">
              <h1 className="FooterLogo">Eatsy</h1>
            </Link>
            <p>We make it easy to find your food</p>
          </div>
          <div className="FooterRight" >
            <div><i className="far fa-copyright"></i> 2018 Eatsy, Inc.</div>
            <a className='tiffany-links' href="https://github.com/tjshiu/eatsy">
              <img src="https://res.cloudinary.com/dwanjkcku/image/upload/v1526010598/GitHub-Mark-120px-plus.png" />
            </a>
            <a className='tiffany-links' href="https://www.linkedin.com/in/tiffany-shiu/">
              <img src="https://res.cloudinary.com/dwanjkcku/image/upload/v1526010598/linkedin.png" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
