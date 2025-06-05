import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/LegalPage.module.css';

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastupdated}>Last Updated On: 06-06-2025</p>
        <p>
          At Ideo Graphics Private Limited, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website or submit inquiries via our contact form.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul className={styles.list}>
            <li><strong>Contact Information:</strong> Name, email, phone number.</li>
            <li><strong>Project Details:</strong> Messages, files, and briefs you upload.</li>
            <li><strong>Device & Usage Information:</strong> IP address, browser type, time zone, and site interaction data via cookies.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className={styles.list}>
            <li>Respond to inquiries and provide service updates.</li>
            <li>Understand your needs and offer tailored solutions.</li>
            <li>Improve our website experience and internal operations.</li>
            <li>Maintain compliance with applicable legal and security standards.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Sharing and Third Parties</h2>
          <p>We do not sell, rent, or trade your data. We may share it with trusted partners solely for:</p>
          <ul className={styles.list}>
            <li>Email or form-processing services (e.g., Google Workspace, analytics tools).</li>
            <li>Legal compliance or protection against fraud.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cookies and Tracking</h2>
          <p>Our website uses cookies and similar technologies to:</p>
          <ul className={styles.list}>
            <li>Remember your preferences.</li>
            <li>Track user behavior for analytics (e.g., Google Analytics).</li>
          </ul>
          <p>You may disable cookies through your browser settings.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Retention</h2>
          <p>We retain your data only as long as needed for its intended purpose or to meet legal requirements.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p>You have the right to:</p>
          <ul className={styles.list}>
            <li>Request access or deletion of your data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Raise concerns with a regulatory authority.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p>For questions or requests regarding your personal data:</p>
          <ul className={styles.list}>
            <li><strong>Email:</strong> info@ideogfx.com</li>
            <li><strong>Phone:</strong> +91 8075873153</li>
            <li><strong>Address:</strong> 5H1, BCG Residency Towers, Opp. CSEZ, Seaport-Airport Road, Kakkanad, Kochi, Kerala - 682037</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
