"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/HomePageHero.module.css";

const HeroSectionFrame: NextPage = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.heroSectionFrame}>
      <div className={styles.heroContainer}>
        <div className={styles.heroSection}>
          <div className={styles.heroTitleContainer}>
            <div className={styles.yourNext}>Your next</div>
            <div className={styles.upgrade}>Upgrade</div>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroCoverImage}>
              <Image
                className={styles.heroMainImage}
                width={762}
                height={418}
                alt="Hero Cover"
                src="/Hero_cover_image.png"
              />
            </div>
            <div className={styles.heroSubtitleContainer}>
              <div className={styles.craftingSeamlessUser}>
                Crafting seamless User Experiences through innovative and user
                centric UI/UX Design to elevate your Digital Transformation.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroCta}>
          <div className={styles.getStarted}>Get Started</div>
          <Image
            className={styles.solararrowRightUpLinearIcon}
            width={24}
            height={24}
            alt=""
            src="/solar_arrow-right-up-linear.svg"
          />
        </div>
        <button className={styles.scrollDownIcon} onClick={handleScrollDown}>
          <Image
            width={48}
            height={55}
            alt="Scroll down"
            src="/Group166.svg"
          />
          <Image
            width={48}
            height={55}
            alt="Scroll down"
            src="/Group2.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroSectionFrame;