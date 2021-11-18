import styles from "./references-section.module.css";

import BusinessInsider from "../../../media/images/businessInsider.svg";
import Cnet from "../../../media/images/cnet.svg";
import Forbes from "../../../media/images/forbes.svg";
import Vice from "../../../media/images/vice.svg";

const ReferencesSection = () => (
  <div className={styles.wrapper}>
    <Cnet />
    <Forbes />
    <Vice />
    <BusinessInsider />
  </div>
);

export default ReferencesSection;
