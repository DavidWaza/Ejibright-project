import styles from "../../page.module.css";

const Button = (props) => {
  return (
    <>
      <button className={styles.orangeButton}>{props.text}</button>
    </>
  );
};

export default Button;
