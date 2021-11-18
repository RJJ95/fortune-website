import styles from "./primary-button.module.css";

const PrimaryButton = ({ onClick, buttonTxt }) => (
  <button className={styles.primaryButton} onClick={onClick}>
    {buttonTxt}
  </button>
);

export default PrimaryButton;
