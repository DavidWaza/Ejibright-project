"use client";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../page.module.css";

const Team = () => {
  const team = [
    {
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,f_auto,q_auto/v1678109681/daniel-alexander-jinLKGDtJpE-unsplash_wuyuo9.jpg",
      name: "Ejike King Ejike",
      position: "President/Founder",
    },
    {
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,f_auto,q_auto/v1678109680/etty-fidele-AzVexpHvuKY-unsplash_iy5bja.jpg",
      name: "Justice Maduka",
      position: "Co-Founder/C.T.O",
    },
    {
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,f_auto,q_auto/v1678109682/dylann-hendricks-0HuGWkvnmt8-unsplash_wvh61z.jpg",
      name: "David waza",
      position: "Developer",
    },
  ];
  return (
    <>
      <div className={styles.teamWrapper}>
        <Container>
          <Row>
            <Col>
              <div className={styles.Atitle}>team members</div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className={styles.teamLeadText}>
                <p>Meet out dedicated team members</p>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.teamLeadSubText}>
                <p>
                  Together, we are a formidable force that stand to achieve
                  great things.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {team.map(({ img, name, position }, index) => (
              <Col sm={4} key={index}>
                <div className={styles.imgWrapper}>
                  <img
                    src={img}
                    alt="team photo"
                    className={styles.teamPhoto}
                  />
                </div>

                <div className={styles.teamName}>
                  <p>{name}</p>
                  <p>{position}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
