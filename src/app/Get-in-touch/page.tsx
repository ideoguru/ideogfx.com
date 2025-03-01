// src/app/test/page.tsx (for App Directory routing) or pages/test.tsx (for Pages Directory)
import { NextPage } from "next";
import Header from "../../components/Header"; // Correct path to Header
import Footer from "../../components/Footer"; // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import GetInTouchFrame from "@/components/get-in-touch/GetInTouch_Hero";
import GetInTouchForm from "@/components/get-in-touch/GetInTouch_Form";
import FAQSection from "@/components/get-in-touch/GetInTouch_FAQ";

const GetIntouchPage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <GetInTouchFrame />
        <GetInTouchForm />
        <FAQSection />
        <div>
          <div></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetIntouchPage;
