import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css"; // Add your custom styles here

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container fluid className="footer-glass">
        <Row>
          <Col md="4" className="footer-copywright text-center text-md-start">
            <h4>
              Designed & Built by{" "}
              <span className="footer-highlight">Kishlay Kumar</span>
            </h4>
          </Col>
          <Col md="4" className="footer-copywright text-center">
            <h4>© {year} Kishlay. All rights reserved.</h4>
          </Col>
          <Col md="4" className="footer-body text-center text-md-end">
            <ul className="footer-icons d-flex justify-content-center justify-content-md-end">
              <li className="social-icons">
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/yourtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/yourlinkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/yourinsta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Footer;
