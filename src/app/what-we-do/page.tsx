import { NextPage } from "next";
import type { Metadata } from "next";
import Header from "../../components/Header";  // Correct path to Header
import Footer from "../../components/Footer";  // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import Conversion from "../../components/what-we-do/whatWeDoConversion";  // Correct path to Footer
import WhtWeDo from "../../components/what-we-do/WhtWeDo_whtWeDo";  // Correct path to Footer
import HowWeDo from "../../components/what-we-do/WhatWeDo_HowWeDo";  // Correct path to Footer
import WhyWorkWithUs from "../../components/what-we-do/WhtweDo_WhyWorkWithUs";  // Correct path to Footer
import GetStarted from "../../components/what-we-do/WhatWeDo_GetStarted";  // Correct path to Footer

export const metadata: Metadata = {
  title: "What We Do | UI/UX, Web & Mobile App Design Services in Kochi",
  description:
    "Explore our services – UI/UX design, mobile app design, website redesign, and UX research tailored for modern digital experiences.",
  keywords: [
    "ui ux design",
    "ui/ux design",
    "Web design Kochi",
    "Mobile app design Kochi",
    "Website redesign company Kochi",
    "UX research services Kochi",
    "Landing page design Kochi",
    "Professional website design services in Cochin",
    "Web development",
    "Mobile app"
  ],
};
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

