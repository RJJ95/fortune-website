import styles from "./primary-menu.module.css";
import Logo from "../../../media/images/logo.svg";
import PrimaryButton from "../../primitives/primary-button";

const PrimaryMenu = ({ menuItems, showMenu }) => (
  <menu
    className={showMenu ? `${styles.menu} ${styles.showMenu}` : styles.menu}
    id="primaryMenu"
  >
    <div className={styles.navigationContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.verticalLine} />
      <div className={styles.menuItemsContainer}>
        {menuItems.map((menuItem, i) => (
          <a index={i} href={menuItem.link}>
            {menuItem.name}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.ctaContainer}>
      <PrimaryButton
        onClick={() =>
          document
            .getElementById("register-section")
            .scrollIntoView({ behavior: "smooth" })
        }
        buttonTxt="Register now"
      />
    </div>
  </menu>
);

export default PrimaryMenu;
