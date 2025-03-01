import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Resourse_hero.module.css";

const ResourcesHero: NextPage = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.contentContainer}>
        {/* Main Heading */}
        <div className={styles.headingContainer}>
  <div className={styles.textWrapper}>
    <h1 className={styles.stayText}>Stay</h1>
    <div className={styles.updatedGradient}>Updated</div>
  </div>
</div>
        {/* Hero Card */}
        <div className={styles.heroCard}>
          <Image
            src="/resources1.png"
            alt="UX Edge"
            fill
            className={styles.cardBackground}
            priority
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>
              The UX Edge: Transforming User Experience into Business
            </h2>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet consectetur. Viverm rivolt commodo ultrices feuribus<br />
              miscissimo magna. Dipendiam tempor risus sagere egetatis utens vulputate tortor.<br />
              Sed sed dovet esse emis augue bibendum liberdiam. Nunc eu sapien volut inerte.
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

        {/* Scroll Indicator */}
        <Image
          src="/Group166.svg"
          width={48}
          height={55}
          alt="Scroll down"
          className={styles.scrollIndicator}
        />
      </div>
    </div>
  );
};

export default ResourcesHero;