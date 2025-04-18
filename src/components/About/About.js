import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center align-items-center about-intro-row">
          <Col md={6} className="about-text-col">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="about-heading"
            >
              <span className="highlight">Who</span> Am I?
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Aboutcard />
            </motion.div>
          </Col>

          <Col md={6} className="about-img-col">
            <motion.img
              src={laptopImg}
              alt="about"
              className="img-fluid rounded about-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
        </Row>

        <motion.h1
          className="project-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="highlight">Professional</span> Skillset
        </motion.h1>

        <Techstack />

        <motion.h1
          className="project-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tools <span className="highlight">I Love</span> Using
        </motion.h1>

        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
