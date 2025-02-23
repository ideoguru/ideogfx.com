// src/app/test/page.tsx (for App Directory routing) or pages/test.tsx (for Pages Directory)
import { NextPage } from "next";
import Header from "../../components/Header";  // Correct path to Header
import Footer from "../../components/Footer";  // Correct path to Footer
import styles from "../../styles/HomePage.module.css";


const GetIntouchPage: NextPage = () => {
    return (
        <div className={styles.homePage}>
          <Header />
          <main>
            <h1>What We Do</h1>
            <p>Details about what we do here.</p>
          </main>
          <Footer />
        </div>
      );
};

export default GetIntouchPage;
