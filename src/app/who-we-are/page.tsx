// src/app/test/page.tsx (for App Directory routing) or pages/test.tsx (for Pages Directory)
import { NextPage } from "next";
import type { Metadata } from "next";
import Header from "../../components/Header";  // Correct path to Header
import Footer from "../../components/Footer";  // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import WhoWeAre from "../../components/who-we-are/WhoWeAreStartingPage";  
import WhoWeAreSubtext from "../../components/who-we-are/WhoWeAre_SubText";  
import Specialization from "../../components/who-we-are/WhoWeAre_specialization";  
import MeetOurTeam from "../../components/who-we-are/WhoWeAre_MeetOurTeam";  

export const metadata: Metadata = {
  title: "Who We Are | UI/UX Design Experts in Kochi – IdeoGFX",
  description:
    "Learn about IdeoGFX – a passionate team of designers offering user-centered design services in Kochi. We blend creativity with functionality.",
  keywords: [
    "UI UX",
    "UI/UX designer",
    "UX research services Kochi",
    "User research",
    "Figma designers Kochi",
    "Best UI UX company Kochi",
    "UI/UX design studio Kochi"
  ],
};
const WhoWeArePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
       <WhoWeAre />
       <WhoWeAreSubtext />
       <Specialization />
       <MeetOurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeArePage;
