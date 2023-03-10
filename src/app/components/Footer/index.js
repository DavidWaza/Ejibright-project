"use client";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../page.module.css";
import OrangeButton from "../Button/button";

const Footer = () => {
  const terms = [
    { link: "/faq", name: "faq" },
    { link: "/contact", name: "contact" },
    { link: "/policy", name: "privacy policy" },
  ];
  const icons = [
    { link: "https://wa.me/+2348039305386", src: "/whatsapp.png" },
    { link: "mailto:ejibrightgroup@gmail.com", src: "/mail.png" },
    { link: "tel:+2349139205555", src: "/customer.png" },
  ];
  return (
    <>
      <div className={styles.footerWrapper}>
        <Container className={styles.borderWidth}>
          <Row>
            <Col sm={6}>
              <div className={styles.footerContactText}>
                <p>Need First class Project? </p>
              </div>
              <div className={styles.footerButton}>
                <Link href="/contact">
                  <OrangeButton text="Get an appointment" />
                </Link>
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.footerContactText}>
                <p>Ejibright, clients favorite Multipurpose company.</p>
              </div>
              <Row>
                <Col sm={6}>
                  <div className={styles.mainLocation}>
                    <p>Anambra</p>
                  </div>
                  <div className={styles.address}>
                    <p>85 club road/Abakiliki street Akwa, Anambra.</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={styles.mainLocation}>
                    <p>Lagos</p>
                  </div>
                  <div className={styles.address}>
                    <p>34 wharf road Atlantic Building Apapa, Lagos.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={6}>
              <div className={styles.terms}>
                {terms.map(({ link, name }, index) => (
                  <Link href={link} key={index}>
                    <p>{name}</p>
                  </Link>
                ))}
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.iconContainer}>
               {icons.map(({link, src}, index) =>(
                <Link href={link} key={index}>
                    <img src={src} alt="icon" className={styles.icon} />
                </Link>
               ))}
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.noirFooter}>
            <div className={styles.copyright}>
                <p>&#169; 2023 <span>Ejibright</span>. All rights reserved</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
