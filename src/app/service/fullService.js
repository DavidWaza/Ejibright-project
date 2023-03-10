"use client";
import styles from "../page.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../components/Card";

const FullServices = ({name, img, slug}) => {
  const services = [
    {
      category: "school",
      name: "Blessed De King first brain works limited",
      link: `/post/0`,
      img: "/school.png",
      slug: "Blessed De kng first Brain works limited is a popular, well-equipped educational Institution. The school has the three streams of Nursery, Primary and Secondary.",
    },
    {
      category: "media",
      name: "Ejibright Media Co.Limited",
      link: `/post/1`,
      img: "/media.png",
      slug: "Our team of graphic experts can put together exactly what you have in mind, or put together custom graphics to meet your individual needs. Our artists will bring the client’s vision to life using numerous creative mediums. ",
    },
    {
      category: "event planning",
      name: "Purity leisure world limited",
      link: `/post/2`,
      img: "/event.png",
      slug: "Setting a standard is our vision; At Purity leisure world limited we go that mile to make it happen, celebrate your next event with us and make it a rave. Our world is all about possibility.",
    },
    {
      category: "real estate",
      name: "Great Treasure Real Estate",
      link: `/post/3`,
      img: "/house.png",
      slug: "Great Treasure real estate limited is a real estate development company committed to positive disruption of the real estate development and construction sectors in Nigeria.",
    },
    {
      category: "automobile",
      name: "king of Car Mega Biz",
      link: `/post/4`,
      img: "/car.png",
      slug: "At king of car mega Biz, our commitment to innovation and iconic customer experiences have made us one of the nation’s largest retailer of new and used cars",
    },
    {
      category: "security",
      name: "Civil Guide Global Network",
      link: `/post/5`,
      img: "/camera.png",
      slug: "CIVIL GUIDE GLOBAL NETWORK (CGGN SECURITY) is a member of EJIBRIGHT GROUP which is an active practitioner in the industrial private security business, was incorporated in Nigeria as a private security company.",
    },
    {
        category: "logistics",
        name: "EJIBRIGHT GLOBAL RESOURCES & LOGISTICS LIMITED",
        link: `/post/6`,
        img: "/car.png",
        slug: "We provide complete international freight forwarding and logistics services....",
      },
      {
        category: "paint",
        name: "THE KING CHEMICAL MULTI-LINK CO. LIMITED",
        link: `/post/7`,
        img: "/paint.png",
        slug: "We bring your products to full, vibrant life with paints and coatings manufactured here in Nigeria, tailored exactly to your needs and specifications. ",
      },
      {
        category: "oil and gas",
        name: "MEREMEZE PETROCHEMICALS LIMITED",
        link: `/post/8`,
        img: "/gas.png",
        slug: "A global leader in specialty chemistries dedicated to improving the quality of life through products and expertise that serve the world’s most essential industries. ",
      },
      {
        category: "engineering technology ",
        name: "IGBO SOLID GLOBAL LIMITED ",
        link: `/post/9`,
        img: "/setting.png",
        slug: "ISG are the specialists in Dust Control, Soil Stabilisation, Erosion Control and Water Management. ",
      },
      {
        category: "oil and gas",
        name: "EJIBRIGHT HEAVY WAVES OIL EXPLORATION CO. LIMITED",
        link: `/post/10`,
        img: "/gas.png",
        slug: "EJIBRIGHT HEAVY WAVES OIL EXPLORATION is the ideal OIL AND GAS partner: our service team guarantees customer assistance for the entire life cycle of your plant, from initial concept design to decommissioning.  ",
      },
      {
        category: "beverage",
        name: "Trepure Beverage limited",
        link: `/post/11`,
        img: "/coffee.png",
        slug: "We’re a National leader in premium drinks, the most exciting consumer products category With over 200 brands and sales in many countries, our portfolio has remarkable breadth across spirits and beer."
      },
  ];
  return (
    <div className={styles.serviceWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.titleContainer}>
              <div className={styles.Atitle}>Our Services</div>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map(({ slug, category, name, link, img, pid }, index) => (
            <Col sm={4} key={index}>
              <Card
                img={img}
                category={category}
                name={name}
                link={link}
                slug={slug}
                query={pid}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FullServices;
