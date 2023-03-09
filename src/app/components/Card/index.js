import styles from "../../page.module.css";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";

const Card = (props) => {
  return (
    <>
      <Container>
        <Row className="g-0">
          <Col>
            <div className={styles.card}>
              <Link href={props.link}>
                <div className={styles.imgWrapper}>
                  <img
                    src={props.img}
                    alt="img"
                    className={styles.imageContainer}
                  />
                </div>
              </Link>
              <div className={styles.cardContent}>
                <p>{props.category}</p>
                <p>{props.name}</p>
                <p className={styles.slug}>{props.slug}</p>
                <div className={styles.contentLink}>
                  <Link href={props.link}>
                    <p>Read More </p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
