import type { NextPage } from "next";
import Header from "../components/Header";
import HeroSection from "../components/HomePageHero";
import WhatWeDoSection from "../components/HomePageWhatWeDo";
import CaseStudies from "../components/HomePageCaseStudy";
import Footer from "../components/Footer";
import styles from "../styles/HomePage.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default HomePage;
