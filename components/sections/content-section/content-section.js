import HeaderedParagraph from "../../constructs/headered-paragraph/headered-paragraph";
import styles from "./content-section.module.css";

const ContentSection = ({ content }) => (
  <div className={styles.wrapper}>
    <div className={styles.svgContainer}>{content.svg}</div>
    <HeaderedParagraph
      header={content.header}
      headerLabel={content.headerLabel}
      content={content.content}
    />
  </div>
);

export default ContentSection;
