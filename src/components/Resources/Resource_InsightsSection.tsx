// components/InsightsSection.tsx
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Resource_InsightsSection.module.css";

const InsightsSection: NextPage = () => {
  return (
    <section className={styles.insightsSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Insights</h2>
        </div>

        <div className={styles.cardsContainer}>
          {/* Row 1 */}
          <div className={styles.insightCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/resource4.png"
                alt="UX Trends"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>2024 UX Design Trends Report</h3>
              <p className={styles.cardDescription}>
                Explore the latest trends shaping user experience design across digital platforms.
              </p>
              <button className={styles.readMoreButton}>
                Read More
                <Image src="/solar_arrow-right-up-linear.svg" width={20} height={20} alt="arrow" />
              </button>
            </div>
          </div>

          <div className={styles.insightCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/resource5.png"
                alt="AI in Design"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>AI in Modern Interface Design</h3>
              <p className={styles.cardDescription}>
                Understanding AI's impact on interface development and personalized experiences.
              </p>
              <button className={styles.readMoreButton}>
                Read More
                <Image src="/solar_arrow-right-up-linear.svg" width={20} height={20} alt="arrow" />
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.insightCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/resource6.png"
                alt="Mobile UX"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Mobile-First Design Strategies</h3>
              <p className={styles.cardDescription}>
                Mastering responsive design principles for optimal mobile experiences.
              </p>
              <button className={styles.readMoreButton}>
                Read More
                <Image src="/solar_arrow-right-up-linear.svg" width={20} height={20} alt="arrow" />
              </button>
            </div>
          </div>

          <div className={styles.insightCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/resource7.png"
                alt="Accessibility"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Accessibility in Web Design</h3>
              <p className={styles.cardDescription}>
                Implementing WCAG guidelines for inclusive digital experiences.
              </p>
              <button className={styles.readMoreButton}>
                Read More
                <Image src="/solar_arrow-right-up-linear.svg" width={20} height={20} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;