"use client";
import { Container, Col, Row } from "react-bootstrap";
import Contstyles from "../Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../components/Button/button";
import Link from "next/link";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgebzekj");
  if (state.succeeded) {
    return (
      <>
        <Container>
          <Row>
            <div className={Contstyles.successImg}>
              <img
                src="/success.png"
                alt="success"
                className={Contstyles.successLogo}
              />
            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className={Contstyles.successContent}>
                <p>Success!</p>
                <p>Thank you for submitting</p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className={Contstyles.successLink}>
              <Link href="/">
                <p>Back to Home</p>
              </Link>
            </div>
          </Row>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container className={Contstyles.wrapper}>
        <Row>
          <Col sm={5}>
            <div className={Contstyles.headerTitle}>
              <p>Contact us</p>
              <p>You can reach us via email or this form below.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input
                id="number"
                type="number"
                name="number"
                placeholder="Phone Number"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                maxLength={3000}
                placeholder="Leave us a message"
                className={Contstyles.textArea}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className={Contstyles.buttonSubmit}>
                <button type="submit" disabled={state.submitting}>
                  send enquiry
                </button>
              </div>
            </form>
          </Col>
          <Col sm={7}>
            <div className={Contstyles.imgWrapper}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
