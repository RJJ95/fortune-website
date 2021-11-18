import styles from "./headered-paragraph.module.css";

const HeaderedParagraph = ({ headerLabel, header, content }) => (
  <div className={styles.wrapper}>
    <label>{headerLabel}</label>
    <h2>{header}</h2>
    <p className={styles.paragraph}>{content}</p>
  </div>
);

export default HeaderedParagraph;
