import type { NextPage } from "next";
import Header from "../components/Header";
import HeroSection from "../components/HomePage/HomePageHero";
import WhatWeDoSection from "../components/HomePage/HomePageWhatWeDo";
import CaseStudies from "../components/HomePage/HomePageCaseStudy";
import Footer from "../components/Footer";
import styles from "../styles/HomePage.module.css";
import Testmonial from "../components/HomePage/HomePageTestimonials";
import Insights from "../components/HomePage/HomePageInsights";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroSection />
      <br></br>
      <br></br>
      <WhatWeDoSection />
      {/* <CaseStudies /> */}
      <Testmonial />
      {/* <Insights /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
