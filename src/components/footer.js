import React from 'react';

import '../../style/footer.css';

const Footer = () => {
  return (
    <div id="footer" className="content-footer">
      <div className="left-c">
        <h3>ABOUT THIS PAGE</h3>
        <p>Created with lots of bits and bytes (& React).</p>
      </div>
      <div className="divider">
      </div>
      <div className="right-c">
        <h3>AROUND THE WEB</h3>
        <ul>
          <li><a href="https://twitter.com/peter_krevenets" target="_blank"><i className="fa fa-twitter-square fa-2x"></i></a></li>
          <li><a href="https://ua.linkedin.com/in/peter-krevenets-35b50b33" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
          <li><a href="https://github.com/GuRuGuMaWaRu" target="_blank"><i className="fa fa-github-square fa-2x"></i></a></li>
        </ul>
      </div>
      <p className="copyright">&copy; GuRuGuMaWaRu, 2016.</p>
    </div>
  );
}

export default Footer;
