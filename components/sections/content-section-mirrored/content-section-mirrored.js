import HeaderedParagraph from "../../constructs/headered-paragraph/headered-paragraph";
import styles from "./content-section-mirrored.module.css";

const ContentSectionMirrored = ({ content, id }) => (
  <div id={id} className={styles.wrapper}>
    <div className={styles.contentContainer}>
      <HeaderedParagraph
        header={content.header}
        headerLabel={content.headerLabel}
        content={content.content}
      />
    </div>
    <div className={styles.svgContainer}>{content.svg}</div>
  </div>
);

export default ContentSectionMirrored;
