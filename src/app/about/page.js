"use client";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../page.module.css";
import abtStyles from "./about.module.css";
import Button from "../components/Button/button";
import Link from "next/link";
import Team from "../components/Team";

const AboutUs = () => {
  return (
    <div>
      <Row className="g-0">
        <Col sm={6}>
          <div className={styles.aboutHero}></div>
        </Col>
        <Col sm={6}>
          <div className={styles.heroLeft}>
            <div className={`${styles.contentHero} ${abtStyles.aboutContent}`}>
              <p>About Us</p>
              <p>
                We are a multipurpose company that focus on long term
                relationships with customers.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className={styles.AboutWrapper}>
        <Container>
          <Row className="g-0">
            <Col sm={6}>
              <div className={abtStyles.title}>
                <p>Our Businesses</p>
                <p>
                  Ejibright Group comprises of many subsidiaries whom as a
                  diversified conglomerate, our interest in multiple industries
                  indicate our determination to cater to our vision of basic
                  needs.
                </p>
                <div className={styles.buttonContainer}>
                  <Link href="/about">
                    <Button text="Read More" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.imageOne}></div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col sm={6}>
              <div className={styles.imageTwo}></div>
            </Col>
            <Col sm={6}>
              <div className={abtStyles.title}>
                <p>Sustainability</p>
                <p>
                  Our approach to sustainability goes beyond compliance with
                  regulatory expectations. We are driven by a desire to
                  contribute to, and positively impact the development of our
                  society at large.
                </p>
                <div className={styles.buttonContainer}>
                  <Link href="/about">
                    <Button text="Read More" />
                  </Link>
                </div>
              </div>
            </Col>
            <Row className="g-0">
              <Col sm={6}>
                <div className={abtStyles.title}>
                  <p>Customer Satisfaction</p>
                  <p>
                    We are poised to deliver exceptional service which creates
                    long term Customer loyalty and retention.
                  </p>
                  <div className={styles.buttonContainer}>
                    <Link href="/about">
                      <Button text="Read More" />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className={styles.imageThree}></div>
              </Col>
            </Row>
          </Row>
        </Container>
        <Row className={abtStyles.coreWrapper}>
          <Col sm={3}>
            <div className={abtStyles.coreValues}>
              <div className={abtStyles.coreNumber}>
                <p>01</p>
              </div>
              <div className={abtStyles.coreContent}>
                <p>Do the right things</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className={abtStyles.coreValues}>
              <div className={abtStyles.coreNumber}>
                <p>02</p>
              </div>
              <div className={abtStyles.coreContent}>
                <p>Put people first</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className={abtStyles.coreValues}>
              <div className={abtStyles.coreNumber}>
                <p>03</p>
              </div>
              <div className={abtStyles.coreContent}>
                <p>Win together</p>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className={abtStyles.coreValues}>
              <div className={abtStyles.coreNumber}>
                <p>04</p>
              </div>
              <div className={abtStyles.coreContent}>
                <p>Go for greatness</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Container>
        <Row>
          <Col>
            <div className={abtStyles.Atitle}>
              <p>THE CEO</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className={abtStyles.ceo}></div>
          </Col>
          <Col sm={6}>
            <div className={abtStyles.abtCeo}>
              <p>
                Ejike King Ejike is the chairman of EjiBright group. He is an
                award-winning Entrepreneur, philanthropist and an administrator.
                He is proficient in leadership, Entrepreneurship and business
                development, problem solving, Negotiation, management and
                portfolio diversification.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Team />
    </div>
  );
};

export default AboutUs;
