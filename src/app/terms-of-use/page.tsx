import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/LegalPage.module.css';

const TermsOfUsePage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p>Last Updated On: 06-06-2025</p>
        <p>
          By accessing and using this website (ideogfx.com), you agree to the following Terms of Service. Please read them carefully.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Website Use</h2>
          <p>You agree to use this site solely for lawful purposes and in accordance with these terms. Misuse or unauthorized access may result in legal action.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Intellectual Property</h2>
          <p>All content including visuals, designs, text, logos, icons, and graphics is the property of Ideo Graphics Pvt. Ltd. or its clients, and may not be copied, modified, or reused without prior written permission.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Service Requests</h2>
          <p>Submitting a project inquiry does not constitute a contract. We reserve the right to accept or reject any service request at our discretion. Project scope, timelines, and fees will be discussed and mutually agreed upon via formal proposals and contracts.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          <p>Ideo Graphics is not liable for:</p>
          <ul className={styles.list}>
            <li>Temporary unavailability of the website.</li>
            <li>Data loss due to third-party service interruptions.</li>
            <li>Any indirect damages resulting from your use of our site or services.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Links</h2>
          <p>Our website may include links to third-party sites. We are not responsible for their content, security, or privacy practices.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Modifications</h2>
          <p>We may update these Terms at any time without prior notice. Continued use of the site implies your acceptance of any changes.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Governing Law</h2>
          <p>These Terms shall be governed by the laws of the Republic of India. Any disputes shall be subject to the jurisdiction of courts located in Kochi, Kerala.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>Questions about our Terms?</p>
          <ul className={styles.list}>
            <li><strong>Email:</strong> info@ideogfx.com</li>
            <li><strong>Phone:</strong> +91 8075873153</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
