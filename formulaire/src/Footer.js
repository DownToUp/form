import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer class="text-center text-white Foo" style={{ backgroundColor: " rgba(190, 219, 224, 0.199)" }}>

      <div class="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2021 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">devenir frontEnd.com</a>
      </div>

    </footer>

  );
}

export default Footer;