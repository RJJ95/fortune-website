import styles from "./hero-header.module.css";
import PrimaryButton from "../../primitives/primary-button/primary-button";

const HeroHeader = () => (
  <div className={styles.wrapper}>
    <h1>Fortune</h1>
    <p className={styles.paragraph}>Manage your finances from one platform.</p>
    <PrimaryButton buttonTxt="Find out how" />
  </div>
);

export default HeroHeader;
