"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/WhatWeDoconversion.module.css";

const HeroFrame: NextPage = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.heroFrame}>
      <div className={styles.heroContainer}>
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
        <div className={styles.heroContainerIn}>
          <div className={styles.coverText}>
            <div className={styles.coverTextInner}>
              <div className={styles.fromConceptToParent}>
                <div className={styles.fromConceptTo}>From Concept to</div>
                <h1 className={styles.conversion}>Conversion</h1>
              </div>
            </div>
          </div>
          <div className={styles.coverImg}>
            <Image
              className={styles.mainImage}
              width={668}
              height={491}
              alt="Main Image"
              src="/WhatWeDo-Hero Image.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFrame;
         