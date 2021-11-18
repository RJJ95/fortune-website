import styles from "../styles/Home.module.css";
import PrimaryMenu from "../components/sections/primary-menu";
import HeroSection from "../components/sections/hero-section/hero-section";
import ReferencesSection from "../components/sections/references-section/references-section";
import ContentSection from "../components/sections/content-section/content-section";

import OnlineBanking from "../media/images/onlineBanking.svg";
import Crypto from "../media/images/crypto.svg";

export default function Home() {
  const menuItems = [
    { name: "Home", link: "#home", active: true },
    { name: "Online banking", link: "#online-banking", active: false },
    { name: "Stocks", link: "#stocks", active: false },
    { name: "Crypto", link: "#crypto", active: false },
  ];
  const onlineBankingContent = {
    headerLabel: "Online banking",
    header: "One platform, for all your banking needs.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svg: <OnlineBanking />,
  };
  const cryptoContent = {
    headerLabel: "Crypto",
    header: "Stay up to date, in this volatile domain.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    svg: <Crypto />,
  };
  return (
    <div className={styles.container}>
      <PrimaryMenu menuItems={menuItems} />
      <HeroSection />
      <ReferencesSection />
      <ContentSection content={onlineBankingContent} />
      <ContentSection content={cryptoContent} />
    </div>
  );
}
