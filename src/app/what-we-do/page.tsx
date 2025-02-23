import { NextPage } from "next";
import Header from "../../components/Header";  // Correct path to Header
import Footer from "../../components/Footer";  // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import Conversion from "../../components/what-we-do/whatWeDoConversion";  // Correct path to Footer
import WhtWeDo from "../../components/what-we-do/WhtWeDo_whtWeDo";  // Correct path to Footer
import HowWeDo from "../../components/what-we-do/WhatWeDo_HowWeDo";  // Correct path to Footer
import WhyWorkWithUs from "../../components/what-we-do/WhtweDo_WhyWorkWithUs";  // Correct path to Footer
import GetStarted from "../../components/what-we-do/WhatWeDo_GetStarted";  // Correct path to Footer


const WhatWeDoPage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
       <Conversion />
       <WhtWeDo />
       <HowWeDo />
       <div>
       <div><WhyWorkWithUs /></div>
       <GetStarted />
       </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDoPage;

