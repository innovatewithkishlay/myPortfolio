import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

function Home2() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClose = () => setShowPopup(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields correctly.");
      return;
    }

    emailjs
      .send(
        "your_service_id", // Replace with your actual EmailJS service ID
        "your_template_id", // Replace with your template ID
        formData,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(() => {
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
        console.error(err);
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container fluid className="bg-black text-white" id="contact">
      <Container className="py-16 px-4 sm:px-8">
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <Row className="justify-center">
              <Col md={8}>
                <h2 className="text-center text-4xl font-bold mb-6 text-[#CD5FF8]">
                  Contact Me
                </h2>
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <Form.Group controlId="formName" className="mb-4">
                    <Form.Label className="text-lg text-[#CD5FF8]">
                      Your Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-lg border-2 border-[#CD5FF8] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#CD5FF8] transition duration-300 shadow-md hover:shadow-lg"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label className="text-lg text-[#CD5FF8]">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-lg border-2 border-[#CD5FF8] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#CD5FF8] transition duration-300 shadow-md hover:shadow-lg"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-6">
                    <Form.Label className="text-lg text-[#CD5FF8]">
                      Reason to Contact
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Write your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-lg border-2 border-[#CD5FF8] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#CD5FF8] transition duration-300 shadow-md hover:shadow-lg"
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="outline-light"
                      type="submit"
                      className="px-8 py-3 rounded-lg border-2 border-[#CD5FF8] bg-[#CD5FF8] text-white hover:bg-transparent hover:text-[#CD5FF8] transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Send
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>

            <Modal
              show={showPopup}
              onHide={handleClose}
              centered
              backdrop="static"
              keyboard={false}
              className="blurred-popup"
            >
              <Modal.Body className="text-center" style={{ color: "#CD5FF8" }}>
                <h4>✅ Message Received!</h4>
                <p>I’ll get back to you as soon as possible.</p>
                <Button
                  variant="outline-light"
                  onClick={handleClose}
                  className="px-6 py-2 rounded-lg border-2 border-[#CD5FF8] bg-[#CD5FF8] text-white hover:bg-transparent hover:text-[#CD5FF8] transition duration-300 shadow-md hover:shadow-lg"
                >
                  Close
                </Button>
              </Modal.Body>
            </Modal>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Container>
  );
}

export default Home2;
