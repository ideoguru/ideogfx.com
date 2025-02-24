"use client"; // Mark this component as a client component

import type { NextPage } from 'next';
import Image from "next/image";
import { useRef } from "react"; // Import useRef for DOM manipulation
import styles from "../../styles/HomePageInsights.module.css";

const InsightsFrame: NextPage = () => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null); // Ref for the cards container

  // Function to scroll cards left
  const scrollLeft = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollBy({
        left: -300, // Scroll by 300px to the left
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to scroll cards right
  const scrollRight = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollBy({
        left: 300, // Scroll by 300px to the right
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className={styles.insightsFrame}>
      <div className={styles.insightsViewContainer}>
        <div className={styles.insightsTitle}>Insights</div>
        <div className={styles.insightsContainer}>
          <div className={styles.cardsWrapper} ref={cardsWrapperRef}>
            <div className={styles.cardVersion1}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>How to Conduct a UX Audit to Improve Your Product's Usability</div>
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.cardVersion2}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>Why User Research is the Secret Ingredient for Building Successful Digital Products</div>
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.cardVersion3}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>Top UI/UX Design Trends Shaping Digital Products in 2025</div>
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.cardVersion4}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>Top UI/UX Design Trends Shaping Digital Products in 2025</div>
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.btnPrev} onClick={scrollLeft}>
            <Image className={styles.iconamoonarrowRight2Bold} width={48} height={48} alt="" src="/iconamoon_arrow-right-2-bold.png" />
          </div>
          <div className={styles.btnNext} onClick={scrollRight}>
            <Image className={styles.iconamoonarrowRight2Bold1} width={48} height={48} alt="" src="/iconamoon_arrow-right-2-bold.png" />
          </div>
        </div>
      </div>
      <div className={styles.insightsCta}>
        {/* <div className={styles.btn}>
          <div className={styles.getStarted}>Learn More</div>
          <Image className={styles.solararrowRightUpLinearIcon} width={24} height={24} alt="" src="/solar_arrow-right-up-linear.svg" />
        </div> */}
      
      <div className={styles.btn}>
<div className={styles.getStarted}>Learn More</div>
<Image className={styles.solararrowRightUpLinearIcon} width={24} height={24} alt="" src="/solar_arrow-right-up-linear.svg" />
</div>
    </div>
    </div>
  );
};

export default InsightsFrame;