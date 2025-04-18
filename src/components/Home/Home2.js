import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

function Home2() {
  const { ref, inView } = useInView({
    triggerOnce: false, // 🔁 So it animates every time it enters view
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div ref={ref}>
          <AnimatePresence>
            {inView && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeInUp}
              >
                <Row>
                  <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                      LET ME <span className="purple"> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="home-about-body">
                      I fell in love with programming and I have at least learnt
                      something, I think… 🤷‍♂️
                      <br />
                      <br />I am fluent in classics like
                      <i>
                        <b className="purple"> C++, Javascript and Go. </b>
                      </i>
                      <br />
                      <br />
                      My field of Interest's are building new&nbsp;
                      <i>
                        <b className="purple">Web Technologies and Products </b>{" "}
                        and also in areas related to{" "}
                        <b className="purple">Blockchain.</b>
                      </i>
                      <br />
                      <br />
                      Whenever possible, I also apply my passion for developing
                      products with <b className="purple">Node.js</b> and
                      <i>
                        <b className="purple">
                          {" "}
                          Modern Javascript Library and Frameworks
                        </b>
                      </i>
                      &nbsp; like
                      <i>
                        <b className="purple"> React.js and Next.js</b>
                      </i>
                    </p>
                  </Col>
                  <Col md={4} className="myAvtar">
                    <Tilt>
                      <img src={myImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                  <Col md={12} className="text-center connect-section">
                    <h1 className="connect-heading">
                      <span className="purple">Connect</span> with{" "}
                      <span className="purple">Me</span>
                    </h1>
                    <p className="connect-subtext">
                      I’m always open to collaboration or a casual chat!
                    </p>
                    <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
                      <a
                        href="https://github.com/soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                        aria-label="GitHub"
                      >
                        <AiFillGithub size={30} />
                      </a>
                      <a
                        href="https://twitter.com/Soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                        aria-label="Twitter"
                      >
                        <AiOutlineTwitter size={30} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/soumyajit4419/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn size={30} />
                      </a>
                      <a
                        href="https://www.instagram.com/soumyajit4419"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon"
                        aria-label="Instagram"
                      >
                        <AiFillInstagram size={30} />
                      </a>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Container>
  );
}

export default Home2;
