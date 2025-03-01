// src/app/test/page.tsx (for App Directory routing) or pages/test.tsx (for Pages Directory)
import { NextPage } from "next";
import Header from "../../components/Header";  // Correct path to Header
import Footer from "../../components/Footer";  // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import Hero from "../../components/Resources/Resourse_hero";

const InsightPage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
       <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default InsightPage;
