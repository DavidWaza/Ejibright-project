"use client";
import { Row, Col } from "react-bootstrap";
import styles from '../page.module.css';
import abtStyles from '../about/about.module.css'

const Hero = () => {
  return (
    <div>
      <Row className="g-0">
        <Col sm={6}>
          <div className={styles.serviceHero}></div>
        </Col>
        <Col sm={6}>
          <div className={styles.heroLeft}>
            <div className={`${styles.contentHero} ${abtStyles.aboutContent}`}>
              <p>Services</p>
              <p>
                We are a multipurpose company that focus on long term
                relationships with customers.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
