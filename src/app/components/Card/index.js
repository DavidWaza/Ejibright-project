import styles from "../../page.module.css";
import Link from "next/link";

const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <Link href={props.link}>
          <div className={styles.imgWrapper}>
            <img src={props.img} alt="img" className={styles.imageContainer} />
          </div>
        </Link>
        <div className={styles.cardContent}>
          <p>{props.category}</p>
          <Link href={props.link}>
            <p>{props.name}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
