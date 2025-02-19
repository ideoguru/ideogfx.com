import type { NextPage } from "next";
import Header from "../components/Header";
import HeroSection from "../components/HomePageHero";
import WhatWeDoSection from "../components/HomePageWhatWeDo";
// import Insights from "../components/Insights";
// import CaseStudies from "../components/CaseStudies";
// import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import styles from "../styles/HomePage.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      {/* <Insights />
      // <CaseStudies />
      // <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
