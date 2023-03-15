import { useRouter } from "next/navigation";
import styles from "../../src/app/page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post({ name }) {
  const detailedInfo = [
    {
      id: 1,
      name: "Blessed De King first brain works limited",
      about:
        "Blessed De king first Brain works limited is a popular, well-equipped educational Institution. The school has the three streams of Nursery, Primary and Secondary. The school has a conducive environment for effective learning. There are many well-ventilated classrooms, computer room, Biology, Physics and Chemistry laboratories, a bore-hole, a stand by 1 KVA Generating set, Good toilets etc. In the school, teaching and learning are carried out in a conducive environment and multidisciplinary setting by committed and qualified staff who are leaders in their different disciplines. However, if you want to find out more, do not hesitate to phone us or plan to visit us at your convenient time. We look forward to meeting you.",
      aims: [
        " To prepare our nursery pupils for primary school education, the primary pupils for secondary school education and the secondary school students for tertiary institutions.",
        " To make ready the pupils and students for useful living within the society.",
        "To empower the pupils and students to be able to face the challenges of tomorrow.",
        " To train and equip our pupils and students to lead our nation to greater height in the world.",
      ],
      mission:
        "Blessed De king first Brain works, is a government approved private institution is committed to the educational, social and moral upbringing of the children",
      vision:
        "The vision of this school is to make it a great school recognized in Nigeria and even beyond. Our vision is to train future men and women to stand the advancing and competitive technological development in the 21st century and even beyond.",
    },
    {
      id: 2,
      name: "EJIBRIGHT MEDIA CO. LIMITED",
      about:
        "we create innovative designs along with strategies and marketing. Our team of graphic experts can put together exactly what you have in mind, or put together custom graphics to meet your individual needs. Our artists will bring the client’s vision to life using numerous creative mediums and thus are able to position the client and the brand as a reliable expert in industry.",
      aims: [
        " We understand the time commitment and resources needed to create valuable content assets, and our experienced content creators are here to take care of the content development for you, starting from press releases development, media content, publication editing, and web content and lastly publications production management. The literature used is the strongest marketing challenge businesses face today, and it is our writers who shape opinion and attract audiences.",
        "With artistic roots, our photographer has developed a widespread expertise and has worked with various agencies and corporate clients across the country. we put the creativity to work by using unique lighting skills and cutting edge digital post production techniques. Our work involves and is not limited to advertising, food, architectural, product, and jewellery photography.",
        "We believe in creating lasting relationships with our clients, and tools enhance the building of a stronger brand, a premium share, and a focused position in the market. Our portfolio of strong brands, locally and regionally, requires providing effective solutions, and to create a bundle of marketing collateral, starting from the simplest items (leaflets, flyers, brochures, catalogues, corporate gifts, promotional items, etc.,) to the largest media printing tools (pop-ups, roll-ups, stand out, outdoor media, etc.).",
        "Our technical platform along with a history of vast experience, grant us the ability to communicate brands easily by using media tools that reach audience smoothly and directly, and actively manage the brand profile in the media. The full range of styles and media tools; mobiles, radio, e-marketing, chatting, internet, web, etc. will sure give a solid foundation and produce the highest level of influence to generate the best results to our clients.",
      ],
    },
    {
      id: 3,
      name: "PURITY LEISURE WORLD LIMITED",
      about:
        "Setting a standard is our vision; At Purity leisure world limited we go that mile to make it happen, celebrate your next event with us and make it a rave. Our world is all about possibility.",
      aims: [
        " We are also committed to providing solutions to maximize revenues and simplify operations for independent hotels. We also bring you the latest trends from the hospitality industry sharing tips, marketing tips, professional advice and news.",
        "We are also one of the few hospitality solutions providers in Nigeria, offering a complete suite of IT solutions for the hospitality industry that cover hotel management, web booking engine, online room distribution, restaurant management, guest feedback, and mobile applications, and more. Check out our Hospitality Blog covering the latest tips, tricks & trends for Hotel Industry.",
        "Purity leisure world also partners with Trepure Beverage limited to provide our customers with adequate recipes on Food Production, Housekeeping, Front office, Food and Beverage service and Tourism.",
      ],
    },
    {
      id: 4,
      name: "Great Treasure Real Estate limited",
      about:
        "Great Treasure real estate limited is a real estate development company committed to positive disruption of the real estate development and construction sectors in Nigeria.",
      mission:
        "We are committed to using innovation and integrity in delivering high-quality residence and commercial buildings in choice communities.",
      vision:
        "To be the most successful real estate company with the highest possible and accessible housing solution for all stakeholders.",
      excellence:
        "We are driven by our quest to provide the most accessible real estate solutions while ensuring the maximum safety of all our stakeholders.",
    },
    {
      id: 5,
      name: "KING OF CAR MEGA BIZ CO. LIMITED",
      about:
        "At king of car mega Biz, our commitment to innovation and iconic customer experiences have made us one of the nation’s largest retailer of new and used cars. As the original disruptor of the automotive industry, our “no-haggle” prices transformed car buying and selling from a stressful, dreaded event into the honest, straightforward experience all people deserve. We’ve been raising the bar on customer experiences ever since.",
      customers:
        "We put integrity and transparency at the heart of every interaction with you, whether that interaction is online, on the phone, or in person. We are committed to bringing clarity to each decision you make so you can feel confident about buying the car you love and enjoy the ride while you do it.",
    },
    {
      id: 6,
      name: "CIVIL GUIDE GLOBAL NETWORK LIMITED",
      about:
        "CIVIL GUIDE GLOBAL NETWORK (CGGN SECURITY) is a member of EJIBRIGHT GROUP which is an active practitioner in the industrial private security business, was incorporated in Nigeria as a private security company.",
      mission:
        "To protect life and property of our clients with dedicated staff and safeguard business, investments using customized security services and integrity to honour our commitments",
      services: [
        "Community policing",
        "Crowd control",
        "24/7 surveillance services",
        "VIP protection",
        "Escort services",
        "Special operations",
        "Control the access of customers/visitors in and out of the premises.",
        "Ensure that the company property is safeguarded",
        "Ensure that only authorized vehicles are parked at designated parking areas.",
      ],
    },
    {
      id: 7,
      name: "EJIBRIGHT GLOBAL RESOURCES & LOGISTICS LIMITED",
      about:
        "We are a full-service Ocean freight forwarder operating as Ocean Transportation Intermediary (“OTI”).",
      mission:
        "To retain our leadership in providing affordable & efficient service. Visit us today",
      pros: [
        "We are quite reliable",
        "Trustworthy – our word is our bond",
        "Expert in the business, in & out!",
        "Very competitive price for high quality service",
        "Fully licensed and insured!",
        "We have an outstanding customer service",
      ],
    },
    {
      id: 8,
      name: "THE KING CHEMICAL MULTI-LINK CO. LIMITED",
      about:
        "We bring your products to full, vibrant life with paints and coatings manufactured here in Nigeria, tailored exactly to your needs and specifications. From development to rigorous testing to production consistency to field technical services. We are committed to working hand-in-glove with our customers to deliver coatings in eye-catching colors that bring your products to life.",
      pros: [
        "The king chemical has delivered vibrant, high-quality, specialty paints and coatings.",
        "Products & solutions custom designed to your needs",
        "Superior colour design capabilities ",
        "Fast, nimble, & quality-focused ",
        "On-site technical service – where you need us, when you need us",
      ],
    },
    {
      id: 9,
      name: "MEREMEZE PETROCHEMICALS LIMITED",
      about:
        "A global leader in specialty chemistries dedicated to improving the quality of life through products and expertise that serve the world’s most essential industries. \n At MEREMEZE PETROCHEMICALS, we discover a better way is what drives us every day. It is the foundation for our unrelenting commitment to safe production and retailing of Aviation gas, DPK, PMS, NGO e.t.c . We also ensure good supply chain, quality and regulatory excellence; customer-focused applications science; and product stewardship. It is what enables us to consistently deliver value, performance and peace of mind to our customers and to consumers around the world.",
    },
    {
      id: 10,
      name: "IGBO SOLID GLOBAL LIMITED",
      about:
        "ISG are the specialists in Dust Control, Soil Stabilisation, Erosion Control and Water Management \n We are an international, engineering technology company focussing on providing innovative products and solutions for the mining, civil, agricultural, resources, land development, and environmental management sectors. ISG industry-leading technology is proven to drive process efficiency, deliver sustainable infrastructure outcomes, and improve community health, safety and environmental outcomes.",
    },
    {
      id: 11,
      name: "EJIBRIGHT HEAVY WAVES OIL EXPLORATION CO. LIMITED",
      about:
        "EJIBRIGHT HEAVY WAVES OIL EXPLORATION is the ideal OIL AND GAS partner: our service team guarantees customer assistance for the entire life cycle of your plant, from initial concept design to decommissioning. Our staff of highly qualified supervisors, as well as our Service Engineering team, are available to oversee complex interventions should the need arise 24 hours a day, 7 days a week. An important part of our commitment to our customers is on-time delivery. A dedicated project manager is assigned to each contract to ensure constant and full support for the duration of the project. An aptitude to work in team and a strong commitment to getting the job done are two of the fundamental characteristics that distinguish our staff.",
    },
    {
      id: 12,
      name: "Trepure Beverage limited",
      about:
        "We’re a National leader in premium drinks, the most exciting consumer products category. With over 200 brands and sales in many countries, our portfolio has remarkable breadth across spirits and beer. From centuries-old names to the latest innovations, we're building the very best brands.",
    },
  ];
  const router = useRouter();
  // const { pid } = router.query;
  return (
    <>
      <div className={styles.postHero}>
        <p>{detailedInfo[pid]?.name}</p>
      </div>
      <Container>
        <Row>
          <div className={styles.postContent}>
            {detailedInfo[pid]?.about && <h2>About Us</h2>}
            {detailedInfo[pid]?.about}
          </div>
          {detailedInfo[pid]?.aims && (
            <div className={styles.postContent}>
              <h2>Aims & Objectives</h2>
              {detailedInfo[pid]?.aims?.map((x, i) => (
                <ul key={i}>
                  <li>{x}</li>
                </ul>
              ))}
            </div>
          )}
          <div className={styles.postContent}>
            {detailedInfo[pid]?.mission && <h2>Mission</h2>}
            {detailedInfo[pid]?.mission}
          </div>
          <div className={styles.postContent}>
            {detailedInfo[pid]?.vision && <h2>Vision</h2>}
            {detailedInfo[pid]?.vision}
          </div>
          <div className={styles.postContent}>
            {detailedInfo[pid]?.excellence && <h5>Excellence</h5>}
            {detailedInfo[pid]?.excellence}
          </div>
          <div className={styles.postContent}>
            {detailedInfo[pid]?.customers && <h5>Customer</h5>}
            {detailedInfo[pid]?.customers}
          </div>
          {detailedInfo[pid]?.services && (
            <div className={styles.postContent}>
              <h2>Services</h2>
              {detailedInfo[pid]?.services?.map((x, i) => (
                <ul key={i}>
                  <li>{x}</li>
                </ul>
              ))}
            </div>
          )}
          {detailedInfo[pid]?.pros && (
            <div className={styles.postContent}>
              <h2>Why choose us?</h2>
              {detailedInfo[pid]?.pros?.map((x, i) => (
                <ul key={i}>
                  <li>{x}</li>
                </ul>
              ))}
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}
