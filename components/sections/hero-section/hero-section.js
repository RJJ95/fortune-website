import styles from "./hero-section.module.css";
import HeroSvg from "../../../media/images/heroSvg.svg";
import HeroHeader from "../../constructs/hero-header/hero-header";

const HeroSection = () => (
  <div className={styles.wrapper}>
    <div className={styles.heroHeaderContainer}>
      <HeroHeader />
    </div>
    <div className={styles.imageContainer}>
      <HeroSvg />
    </div>
  </div>
);

export default HeroSection;
