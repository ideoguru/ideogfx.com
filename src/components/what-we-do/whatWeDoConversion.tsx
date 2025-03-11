import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/WhatWeDoconversion.module.css";

const HeroFrame: NextPage = () => {
  return (
    <div className={styles.heroFrame}>
      <div className={styles.heroContainer}>
        <Image
          className={styles.scrollDownIcon}
          width={48}
          height={55}
          alt="Scroll down"
          src="/Group166.png"
        />
        <div className={styles.heroContainerIn}>
          <div className={styles.coverText}>
            <div className={styles.coverTextInner}>
              <div className={styles.fromConceptToParent}>
                <div className={styles.fromConceptTo}>From Concept to</div>
                <div className={styles.conversion}>Conversion</div>
              </div>
            </div>
          </div>
          <div className={styles.coverImg}>
            <Image
              className={styles.untitled61Icon}
              width={395}
              height={275}
              alt="Left Image"
              src="/whtwedo3.png"
            />
            <Image
              className={styles.ipadMiniIcon}
              width={668}
              height={491}
              alt="Main Image"
              src="/whtwedo1.png"
            />
            <Image
              className={styles.untitled51Icon}
              width={395}
              height={275}
              alt="Right Image"
              src="/whtwedo2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFrame;
