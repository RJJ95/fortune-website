import styles from "./footer.module.css";
import Logo from "../../../media/images/logo.svg"

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.copyRightContainer}>
      <Logo />
      <h3 className={styles.copyRightHeader}>Fortune | All rights reserved.</h3>
    </div>
    <div>
      <h3 className={styles.creditsHeader}>By Ricardo de Vries</h3>
    </div>
  </footer>
);

export default Footer;
