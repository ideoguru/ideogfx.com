// components/CaseStudiesSection.tsx
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Resource_CaseStudiesSection.module.css";

const CaseStudiesSection: NextPage = () => {
  return (
    <section className={styles.caseStudiesSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
        </div>

        <div className={styles.cardsContainer}>
          {/* Case Study 1 */}
          <div className={styles.caseStudyCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/resource2.png"
                alt="Order Management System"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Order Management System: Offline to Online Transformation
              </h3>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet consectetur. Urna sit non et tellus. Tristique nunc nisi
                neque rhoncus nam viverra orci. Eleifend viverra viverra mi rhoncus elementum.
              </p>
              <button className={styles.learnMoreButton}>
                Learn More
                <Image
                  src="/solar_arrow-right-up-linear.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                  className={styles.buttonIcon}
                />
              </button>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className={styles.caseStudyCard}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/resource3.jpg"
                alt="Digital Transformation"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Digital Transformation in Retail Banking
              </h3>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet consectetur. Urna sit non et tellus. Tristique nunc nisi
                neque rhoncus nam viverra orci. Eleifend viverra viverra mi rhoncus elementum.
              </p>
              <button className={styles.learnMoreButton}>
                Learn More
                <Image
                  src="/solar_arrow-right-up-linear.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                  className={styles.buttonIcon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;