"use client";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../page.module.css";
import abtStyles from "./about.module.css";
import Card from "../components/Card";
import Button from '../components/Button/button';
import Link from "next/link";

const AboutUs = () => {
  const values = [
    {
      name: "Our Businesses",
      img: "/business.png",
      slug: "EjiBright Group comprises of many subsidiaries whom as a diversified conglomerate, our interest in multiple industries indicates our determination to cater to our vision of providing basic needs.",
      link: "",
    },
    {
      name: "Sustainability",
      img: "/sustainable.png",
      slug: "Our approach to sustainability goes beyond compliance with regulatory expectations. We are driven by a desire to contribute to, and positively impact the development of our society at large. ",
      link: "",
    },
    {
      name: "Customer Satisfaction",
      img: "/satisfaction.png",
      slug: "We are poised to deliver exceptional service which creates long term customer loyalty and retention.",
      link: "",
    },
  ];
  return (
    <div>
      <div className={styles.AboutWrapper}>
        <Container>
          <Row className="g-0">
            <Col sm={6}>
              <div className={styles.title}>
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
              <div className={styles.title}>
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
                <div className={styles.title}>
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
      </div>
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
      <Container>
        <Row>
          <Col>
            <div className={styles.Atitle}>
              <p>Welcome from the ceo</p>
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
      <div>
        <Row className={abtStyles.coreWrapper}>
          {values.map(({ link, slug, name, img }, index) => (
            <Col sm={4} key={index}>
              <Card img={img} name={name} slug={slug} link={link} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
