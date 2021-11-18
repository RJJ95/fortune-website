import styles from "../styles/Home.module.css";
import PrimaryMenu from "../components/sections/primary-menu";
import { useState, useEffect } from "react";
import HeroSection from "../components/sections/hero-section/hero-section";
import ReferencesSection from "../components/sections/references-section/references-section";
import ContentSection from "../components/sections/content-section/content-section";
import ContentSectionMirrored from "../components/sections/content-section-mirrored/content-section-mirrored";
import RegisterSection from "../components/sections/register-section/register-section";
import Footer from "../components/sections/footer/footer";
import Head from 'next/head'
import {
  menuItems,
  onlineBankingContent,
  stockContent,
  cryptoContent,
} from "../media/content/homepage";

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  let lastScrollTop = 0;

  function handleScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
    lastScrollTop = st;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Fortune | Manage your finance</title>
      </Head>
      <PrimaryMenu menuItems={menuItems} showMenu={showMenu} />
      <HeroSection />
      <ReferencesSection />
      <ContentSection id="online-banking" content={onlineBankingContent} />
      <ContentSectionMirrored id="stocks" content={stockContent} />
      <ContentSection id="crypto" content={cryptoContent} />
      <RegisterSection />
      <Footer />
    </div>
  );
}
