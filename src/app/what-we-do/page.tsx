import { NextPage } from "next";
import Header from "../../components/Header";  // Correct path to Header
import Footer from "../../components/Footer";  // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import Conversion from "../../components/what-we-do/whatWeDoConversion";  // Correct path to Footer


const WhatWeDoPage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
       <Conversion />
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDoPage;

