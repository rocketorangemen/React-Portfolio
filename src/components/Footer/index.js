import React from 'react';

// This footer will show up on every page.
function Footer() {
  return (
    <footer id="contact">
      <div class="container">
        <div>
          <h2 >Contact Info</h2>
        </div>
        <div class="footer-nav">
          <ul>
            <li>
              <a href="mailto: rocketorangemen@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://github.com/rocketorangemen">Github</a>
            </li>
            <li>
              <a href="https://www.facebook.com/ramonanthonyflowers"
                >Facebook (deactivated)</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ramon-flowers">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;