"use client";

import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import OrangeButton from "../Button/button";

const About = () => {
  return (
    <>
      <Row className="g-0">
        <Col sm={6}>
          <div className={styles.abtTitleContainer}>
          <div className={styles.Atitle}>
            <p>Who we are</p>
          </div>
          </div>
          
          <div className={styles.title}>
            <p>Our Businesses</p>
            <p>
              Ejibright Group comprises of many subsidiaries whom as a
              diversified conglomerate, our interest in multiple industries
              indicate our determination to cater to our vision of basic needs.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/about">
                <OrangeButton text="Read More" />
              </Link>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className={styles.imageOne}></div>
        </Col>
      </Row>
    </>
  );
};

export default About;
