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
                <Row className="justify-content-center home-intro-section">
                  <Col md={10}>
                    <div className="intro-box">
                      <h1 className="intro-heading">
                        <span className="fade-line">LET ME</span>
                        <br />
                        <span className="purple fade-line">INTRODUCE</span>
                        <br />
                        <span className="fade-line">MYSELF</span>
                      </h1>

                      <p className="intro-body">
                        I fell in love with programming and I’ve learned a lot
                        along the way. 🤷‍♂️
                        <br />
                        <br />
                        I’m fluent in:{" "}
                        <span className="purple">C++, JavaScript, and Go.</span>
                        <br />
                        <br />I enjoy building modern{" "}
                        <span className="purple">
                          Web Technologies and Products
                        </span>
                        , and I’m deeply curious about{" "}
                        <span className="purple">Blockchain</span> and its
                        potential.
                        <br />
                        <br />I also bring my ideas to life using{" "}
                        <span className="purple">Node.js</span> and cutting-edge
                        tools like <span className="purple">React.js</span> and{" "}
                        <span className="purple">Next.js</span>.
                      </p>
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
