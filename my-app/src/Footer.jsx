import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="footer__container">
        <div class="footer__item">
          <h3>About us</h3>
          <div class="footer__content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Omnis nobis, doloremque est facilis velit mollitia? Lorem <br />{" "}
              ipsum dolor.
            </p>
          </div>
        </div>
        <div class="footer__item">
          <h3>My Account</h3>
          <div class="footer__content">
            <p>Check out</p>
            <p>Login</p>
            <p>Create Accout</p>
          </div>
        </div>
        <div class="footer__item">
          <h3>Information</h3>
          <div class="footer__content">
            <p>Home</p>
            <p>Products</p>
            <p>Short Codes</p>
            <p>Mail us</p>
          </div>
        </div>
        <div class="footer__item">
          <h3>Contact</h3>
          <div class="footer__content">
            <p>
              <i class="fa fa-map-marker"></i> 296 Võ Thành Trang
            </p>
            <p>
              <i class="fa fa-phone"></i> 082 251 1296
            </p>
            <p>
              <i class="fa fa-envelope"></i> minhhung.it99@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
