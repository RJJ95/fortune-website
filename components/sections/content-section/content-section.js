import HeaderedParagraph from "../../constructs/headered-paragraph/headered-paragraph";
import styles from "./content-section.module.css";

const ContentSection = ({ content, id }) => (
  <div id={id} className={styles.wrapper}>
    <div className={styles.svgContainer}>{content.svg}</div>
    <div className={styles.contentContainer}>
      <HeaderedParagraph
        header={content.header}
        headerLabel={content.headerLabel}
        content={content.content}
      />
    </div>
  </div>
);

export default ContentSection;
