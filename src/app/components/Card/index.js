import styles from "../../page.module.css";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";

const Card = ({ link, img, category, slug, name }) => {
  console.log(link);
  return (
    <>
      <Container>
        <Row className="g-0">
          <Col>
            <div className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={img} alt="img" className={styles.imageContainer} />
              </div>
              <div className={styles.cardContent}>
                <p>{category}</p>
                <p>{name}</p>
                <p className={styles.slug}>{slug}</p>
                <div className={styles.contentLink}>
                  {link && (
                    <Link href={link}>
                      <p>Read More </p>
                    </Link>
                  )}
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
