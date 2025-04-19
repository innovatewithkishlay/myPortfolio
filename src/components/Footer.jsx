import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
// import "../App.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer-glass"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h4 className="footer-title">Kishlay Kumar</h4>
            <p className="footer-subtitle">
              Full Stack Developer & DSA Enthusiast
            </p>
          </Col>

          <Col md={4} className="footer-section text-center">
            <h5 className="footer-title">Connect with me</h5>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/innovatewithkishlay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kishlay_012"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kishlay_012/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center mt-3">
            <p className="footer-copy">
              &copy; {year}{" "}
              <span className="footer-highlight">Kishlay Kumar</span>. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
}

export default Footer;
