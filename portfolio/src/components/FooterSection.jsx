import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer  text-light py-4" data-aos="fade-up">
        <br className='text-white'/>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0" data-aos="fade-right">
            <h5 className="mb-3">Contact</h5>
            <p>Email: kofiankomah733@gmail.com</p>
            <p>Phone: +233 53 117 4471</p>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h5 className="mb-3">Follow Me</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://twitter.com/yourusername"
                className="btn btn-outline-light btn-lg me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/yourusername"
                className="btn btn-outline-light btn-lg me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="btn btn-outline-light btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="m-0">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
