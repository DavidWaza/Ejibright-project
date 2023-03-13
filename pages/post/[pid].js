import { useRouter } from "next/router";
import styles from "../../src/app/page.module.css";
import { Container, Col, Row } from "react-bootstrap";

export default function Post({ name }) {
  const detailedInfo = [
    {
      id: 1,
      name: "Blessed De King first brain works limited",
      about:
        "Blessed De king first Brain works limited is a popular, well-equipped educational Institution. The school has the three streams of Nursery, Primary and Secondary. The school has a conducive environment for effective learning. There are many well-ventilated classrooms, computer room, Biology, Physics and Chemistry laboratories, a bore-hole, a stand by 1 KVA Generating set, Good toilets etc. In the school, teaching and learning are carried out in a conducive environment and multidisciplinary setting by committed and qualified staff who are leaders in their different disciplines. However, if you want to find out more, do not hesitate to phone us or plan to visit us at your convenient time. We look forward to meeting you.",
      aims: {
        objOne:
          "1. To prepare our nursery pupils for primary school education, the primary pupils for secondary school education and the secondary school students for tertiary institutions.",
        objTwo: "2. To make ready the pupils and students for useful living within the society.",
        objThree: "3.To empower the pupils and students to be able to face the challenges of tomorrow.",
        objFour:"4. To train and equip our pupils and students to lead our nation to greater height in the world.",
        mission: "Blessed De king first Brain works, is a government approved private institution is committed to the educational, social and moral upbringing of the children",
        vision:"The vision of this school is to make it a great school recognized in Nigeria and even beyond. Our vision is to train future men and women to stand the advancing and competitive technological development in the 21st century and even beyond." 
      }
    },
    {
      id: 2,
      name: "EJIBRIGHT MEDIA CO. LIMITED",
      about: "we create innovative designs along with strategies and marketing. Our team of graphic experts can put together exactly what you have in mind, or put together custom graphics to meet your individual needs. Our artists will bring the client’s vision to life using numerous creative mediums and thus are able to position the client and the brand as a reliable expert in industry.",
      aims:{
        objOne:" We understand the time commitment and resources needed to create valuable content assets, and our experienced content creators are here to take care of the content development for you, starting from press releases development, media content, publication editing, and web content and lastly publications production management. The literature used is the strongest marketing challenge businesses face today, and it is our writers who shape opinion and attract audiences.",
        objTwo:"With artistic roots, our photographer has developed a widespread expertise and has worked with various agencies and corporate clients across the country. we put the creativity to work by using unique lighting skills and cutting edge digital post production techniques. Our work involves and is not limited to advertising, food, architectural, product, and jewellery photography.",
        objThree:"We believe in creating lasting relationships with our clients, and tools enhance the building of a stronger brand, a premium share, and a focused position in the market. Our portfolio of strong brands, locally and regionally, requires providing effective solutions, and to create a bundle of marketing collateral, starting from the simplest items (leaflets, flyers, brochures, catalogues, corporate gifts, promotional items, etc.,) to the largest media printing tools (pop-ups, roll-ups, stand out, outdoor media, etc.).",
        objFour:"Our technical platform along with a history of vast experience, grant us the ability to communicate brands easily by using media tools that reach audience smoothly and directly, and actively manage the brand profile in the media. The full range of styles and media tools; mobiles, radio, e-marketing, chatting, internet, web, etc. will sure give a solid foundation and produce the highest level of influence to generate the best results to our clients.", 
      }
    },
      {
        id: 3,
        name: "PURITY LEISURE WORLD LIMITED",
        about: "Setting a standard is our vision; At Purity leisure world limited we go that mile to make it happen, celebrate your next event with us and make it a rave. Our world is all about possibility.",
        aims:{
          objOne:" We are also committed to providing solutions to maximize revenues and simplify operations for independent hotels. We also bring you the latest trends from the hospitality industry sharing tips, marketing tips, professional advice and news.",
          objTwo:"We are also one of the few hospitality solutions providers in Nigeria, offering a complete suite of IT solutions for the hospitality industry that cover hotel management, web booking engine, online room distribution, restaurant management, guest feedback, and mobile applications, and more. Check out our Hospitality Blog covering the latest tips, tricks & trends for Hotel Industry.",
          objThree:"Purity leisure world also partners with Trepure Beverage limited to provide our customers with adequate recipes on Food Production, Housekeeping, Front office, Food and Beverage service and Tourism.",
    }
  },
  {
    id: 4,
    name: "Great Treasure Real Estate limited",
    about: "Great Treasure real estate limited is a real estate development company committed to positive disruption of the real estate development and construction sectors in Nigeria.",
    mission:"We are committed to using innovation and integrity in delivering high-quality residence and commercial buildings in choice communities.",
    vision:"To be the most successful real estate company with the highest possible and accessible housing solution for all stakeholders."
},
{
  id: 5,
  name: "KING OF CAR MEGA BIZ CO. LIMITED",
  about: "At king of car mega Biz, our commitment to innovation and iconic customer experiences have made us one of the nation’s largest retailer of new and used cars. As the original disruptor of the automotive industry, our “no-haggle” prices transformed car buying and selling from a stressful, dreaded event into the honest, straightforward experience all people deserve. We’ve been raising the bar on customer experiences ever since.",
},
{
  id: 6,
  name: "CIVIL GUIDE GLOBAL NETWORK LIMITED",
  about: "CIVIL GUIDE GLOBAL NETWORK (CGGN SECURITY) is a member of EJIBRIGHT GROUP which is an active practitioner in the industrial private security business, was incorporated in Nigeria as a private security company.",
  mission:"To protect life and property of our clients with dedicated staff and safeguard business, investments using customized security services and integrity to honour our commitments.",
  aims:{
    objOne:" We are also committed to providing solutions to maximize revenues and simplify operations for independent hotels. We also bring you the latest trends from the hospitality industry sharing tips, marketing tips, professional advice and news.",
    objTwo:"We are also one of the few hospitality solutions providers in Nigeria, offering a complete suite of IT solutions for the hospitality industry that cover hotel management, web booking engine, online room distribution, restaurant management, guest feedback, and mobile applications, and more. Check out our Hospitality Blog covering the latest tips, tricks & trends for Hotel Industry.",
    objThree:"Purity leisure world also partners with Trepure Beverage limited to provide our customers with adequate recipes on Food Production, Housekeeping, Front office, Food and Beverage service and Tourism.",
}
},


  ];
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <div className={styles.postHero}>
        <p>{detailedInfo[pid]?.name}</p>
      </div>
      <Container>
        <Row>
          <Col>
           {detailedInfo.map(({id,name, about, aims, mission,vision,objOne, objTwo, objThree, objFour}) =>(
            <div className={styles.postContent} key={id}>
              {about}
            </div>
           ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
