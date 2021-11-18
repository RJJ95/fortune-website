import styles from "./footer.module.css";
import Logo from "../../../media/images/logo.svg"

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.copyRightContainer}>
      <Logo />
      <p className={styles.copyRightHeader}>Fortune | All rights reserved.</p>
    </div>
    <div>
      <p className={styles.creditsHeader}>By Ricardo de Vries</p>
    </div>
  </footer>
);

export default Footer;
