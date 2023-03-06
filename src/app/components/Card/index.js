import styles from '../../page.module.css';
import Image from 'next/image';
import ImageOne from '/public/img1.jpg'


const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div>
            {/* <Image src={ImageOne} alt="img" height={200} width={200} /> */}
            <img src="/img1.jpg" alt="img" className={styles.imageContainer} />
        </div>
        <div className={styles.cardContent}>
            <p>School</p>
            <p>Name od School</p>
            <p>About the School</p>
        </div>
      </div>
    </>
  );
};

export default Card;
