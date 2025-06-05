// src/app/test/page.tsx (for App Directory routing) or pages/test.tsx (for Pages Directory)
import { NextPage } from "next";
import type { Metadata } from "next";
import Header from "../../components/Header"; // Correct path to Header
import Footer from "../../components/Footer"; // Correct path to Footer
import styles from "../../styles/HomePage.module.css";
import GetInTouchFrame from "@/components/get-in-touch/GetInTouch_Hero";
import GetInTouchForm from "@/components/get-in-touch/GetInTouch_Form";
import FAQSection from "@/components/get-in-touch/GetInTouch_FAQ";
export const metadata: Metadata = {
  title: "Get in Touch | UI/UX Design Studio in Kochi – IdeoGFX",
  description:
    "Get in touch with IdeoGFX for expert UI/UX, web design, or app design services in Kochi. Let’s discuss your project!",
  keywords: [
    "Contact UI UX designers Kochi",
    "Web design Cochin",
    "Mobile app design Cochin",
    "UI/UX design Cochin",
    "UI/UX design Kochi"
  ],
};

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
