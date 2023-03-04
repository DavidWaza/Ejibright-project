'use client';
import styles from "../../page.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../Card";

const Services = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={styles.Atitle}>services</div>
          </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <Card />
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
