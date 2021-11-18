import styles from "./PrimaryMenu.module.css";

import Logo from "../../../media/images/logo.svg";

const PrimaryMenu = ({ menuItems }) => (
  <menu styles={styles.menu}>
    <div className={styles.logoContainer}>
      <Logo />
    </div>
    <div className={styles.menuItemsContainer}>
      {menuItems.map((menuItem, i) => (
        <a href={menuItem.link}>{menuItem.name}</a>
      ))}
    </div>
    <div className={styles.ctaContainer}></div>
  </menu>
);

export default PrimaryMenu;
