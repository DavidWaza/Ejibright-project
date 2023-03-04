import styles from '../../page.module.css';
import Image from 'next/image';


const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div>
            <Image src='/community.jpg' alt="img" fill />
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
