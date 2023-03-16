import Link from "next/link";
import styles from "../../page.module.css";
import Button from "../Button/button";
import { Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Row className="g-0">
        <Col sm={6} xs={12}>
          <div className={styles.contentWrapper}></div>
        </Col>
        <Col sm={6} className={`d-none d-md-block`}>
          <div className={styles.heroLeft}>
            <div className={styles.contentHero}>
              <p>Transforming the future through innovation and excellence</p>
              <p>
                We are a multipurpose company that focus on long term
                relationships with customers.
              </p>
              <div className={styles.buttonAnime}>
                <Link href="/service">
                  <Button text="check services" />
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
