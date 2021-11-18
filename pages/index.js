import styles from "../styles/Home.module.css";
import PrimaryMenu from "../components/sections/primary-menu";
import HeroSection from "../components/sections/hero-section/hero-section";
import ReferencesSection from "../components/sections/references-section/references-section";
import ContentSection from "../components/sections/content-section/content-section";
import ContentSectionMirrored from "../components/sections/content-section-mirrored/content-section-mirrored";
import {
  menuItems,
  onlineBankingContent,
  stockContent,
  cryptoContent,
} from "../media/content/homepage";
import RegisterSection from "../components/sections/register-section/register-section";

export default function Home() {
  return (
    <div className={styles.container}>
      <PrimaryMenu menuItems={menuItems} />
      <HeroSection />
      <ReferencesSection />
      <ContentSection content={onlineBankingContent} />
      <ContentSectionMirrored content={stockContent} />
      <ContentSection content={cryptoContent} />
      <RegisterSection />
    </div>
  );
}
