import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        className="quote-card-view"
        style={{
          background: "rgba(30, 30, 30, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          color: "#fff",
        }}
      >
        <Card.Body>
          <blockquote
            className="blockquote mb-0"
            style={{ textAlign: "justify" }}
          >
            <p>
              Hey there! I'm <span className="purple">Kishlay Kumar</span> from{" "}
              <span className="purple">India</span>.
              <br />
              I'm a passionate <strong>Full-Stack Developer</strong> with a
              growing interest in <strong>DevOps</strong> and cloud
              infrastructure.
              <br />
              <br />
              My goal is to bridge the gap between development and operations by
              mastering tools like Docker, Kubernetes, CI/CD pipelines, and
              cloud services such as AWS and Azure.
              <br />
              <br />I love creating scalable, efficient applications and
              exploring automation to enhance deployment workflows. I'm always
              learning and striving to improve both my code and my systems
              thinking.
            </p>
            {/* <ul>
              <li className="about-activity">
                <ImPointRight /> Exploring Cloud & DevOps Tools
              </li>
              <li className="about-activity">
                <ImPointRight /> Building Full-Stack Projects
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading DevOps Blogs & Tutorials
              </li>
            </ul> */}
            <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
              "Code with purpose. Automate with precision. Deliver with
              confidence."
            </p>
            <footer className="blockquote-footer">Kishlay Kumar</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default AboutCard;
