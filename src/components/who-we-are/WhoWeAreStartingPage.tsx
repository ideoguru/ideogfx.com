"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/WhoWeAreStartingPage.module.css";

const HeroFrame: NextPage = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by one viewport height
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div className={styles.heroFrame}>
      <div className={styles.container}>
        <Image
          className={styles.heroImage}
          width={500}
          height={450}
          alt=""
          src="/whoweare1.png"
        />
        <div className={styles.meetTheMindsContainer}>
          <p
            className={styles.meetTheMinds}
          >{`Meet the Minds Behind the Magic of Designing Digital Experiences with `}</p>
          <p className={styles.meetTheMinds}>Heart, Strategy, and Innovation</p>
        </div>
      </div>
      <button className={styles.scrollDownIcon} onClick={handleScrollDown}>
        <Image
          width={48}
          height={55}
          alt="Scroll down"
          src="/Group166.svg" // Initial SVG
        />
        <Image
          width={48}
          height={55}
          alt="Scroll down"
          src="/Group2.svg" // Arrow SVG
        />
      </button>
    </div>
  );
};

export default HeroFrame;
