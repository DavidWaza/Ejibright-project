"use client";
import styles from "../../page.module.css";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../Card";
import OrangeButton from "../Button/button";

const Services = () => {
  const services = [
    {
      category: "school",
      name: "Blessed De King first brain works limited",
      link: "/",
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/w_auto,f_auto,q_auto/v1678102907/school_ayscrq.jpg",
    },
    {
      category: "media",
      name: "Ejibright Media Co.Limited",
      link: "/",
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,f_auto,q_auto/v1678102908/media_qyz15d.jpg",
    },
    {
      category: "event planning",
      name: "Purity leisure world limited",
      link: "/",
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/f_auto,q_auto/v1678102906/event_dizmza.jpg",
    },
    {
      category: "real estate",
      name: "Great Treasure Real Estate",
      link: "/",
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,f_auto,q_auto/v1678102908/real_xmcabh.jpg",
    },
    {
      category: "automobile",
      name: "king of Car Mega Biz",
      link: "/",
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/f_auto,q_auto/v1678102905/automobile_xdscto.jpg",
    },
    {
      category: "security",
      name: "Civil Guide Global Network",
      link: "/",
      img: "https://res.cloudinary.com/ddwkojhaj/image/upload/f_auto,q_auto/v1678102907/security_dmlg1z.jpg",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={styles.Atitle}>Services</div>
          </Col>
        </Row>
        <Row>
          {services.map(({ category, name, link, img }, index) => (
            <Col sm={4} key={index}>
              <Card img={img} category={category} name={name} link={link} />
            </Col>
          ))}
        </Row>
        <div className={styles.serviceButton}>
          <Link href="/service">
            <OrangeButton text="Show Services" />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Services;
