import PrimaryMenu from "../components/sections/primary-menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  const menuItems = [
    { name: "Home", link: "#Home", active: true },
    { name: "Online banking", link: "#online-banking", active: false },
    { name: "stocks", link: "#stocks", active: false },
    { name: "Crypto", link: "#crypto", active: false },
  ];
  return (
    <div className={styles.container}>
      <PrimaryMenu menuItems={menuItems} />
    </div>
  );
}
