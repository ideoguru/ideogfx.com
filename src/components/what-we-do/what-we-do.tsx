import type { NextPage } from "next";
import Header from "../Header";
import Footer from "../Footer";

import styles from "../../styles/HomePage.module.css";
import Insights from "../HomePage/HomePageInsights";

const WhatWeDoPage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Insights />
      <Footer />
    </div>
  );
};

export default WhatWeDoPage;
