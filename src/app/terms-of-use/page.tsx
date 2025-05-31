import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/LegalPage.module.css';

const TermsOfUsePage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p>
          Welcome to Ideo Graphics. These Terms of Use govern your access to and use of our website 
          and services. Please read them carefully.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You 
          disagree with any part of these Terms and Conditions then You may not access the Service.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that 
            operates between You and the Company. These Terms and Conditions set out the rights and 
            obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your acceptance of and compliance 
            with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures 
            on the collection, use and disclosure of Your personal information when You use the Application 
            or the Website and tells You about Your privacy rights and how the law protects You. Please read 
            Our Privacy Policy carefully before using Our Service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>User Accounts</h2>
          <p>
            When You create an account with Us, You must provide Us information that is accurate, complete, 
            and current at all times. Failure to do so constitutes a breach of the Terms, which may result 
            in immediate termination of Your account on Our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that You use to access the Service and for any 
            activities or actions under Your password, whether Your password is with Our Service or a 
            Third-Party Social Media Service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by You or other users), 
            features and functionality are and will remain the exclusive property of the Company and its 
            licensors. 
          </p>
          <p>
            The Service is protected by copyright, trademark, and other laws of both the Country and 
            foreign countries. Our trademarks and trade dress may not be used in connection with any 
            product or service without the prior written consent of the Company.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          <p>
            Notwithstanding any damages that You might incur, the entire liability of the Company and any 
            of its suppliers under any provision of this Terms and Your exclusive remedy for all of the 
            foregoing shall be limited to the amount actually paid by You through the Service or 100 USD 
            if You haven't purchased anything through the Service.
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall the Company or its 
            suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to These Terms of Use</h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material We will make reasonable efforts to provide at least 30 days' notice 
            prior to any new terms taking effect. What constitutes a material change will be determined 
            at Our sole discretion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p>If you have any questions about these Terms of Use, You can contact us:</p>
          <ul className={styles.list}>
            <li>By email: info@ideogfx.com</li>
            <li>By phone number: +91 8921700822</li>
            <li>By mail: 5H1, BCG Residency Towers, Opp. CSEZ, Seaport-Airport Road, Kakkanad, Kochi, Kerala - 682037</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
