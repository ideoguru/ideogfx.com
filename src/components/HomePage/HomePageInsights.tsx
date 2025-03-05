"use client";
import type { NextPage } from 'next';
import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/HomePageInsights.module.css";

const InsightsFrame: NextPage = () => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.insightsFrame}>
      <div className={styles.insightsViewContainer}>
        <div className={styles.insightsTitle}>Insights</div>
        <div className={styles.insightsContainer}>
          <div className={styles.cardsWrapper} ref={cardsWrapperRef}>
            {/* Card 1 */}
            <div className={styles.cardVersion1}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>
                      How to Conduct a UX Audit to Improve Your Product's Usability
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.cardVersion2}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>
                      Why User Research is the Secret Ingredient for Building Successful Digital Products
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.cardVersion3}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>
                      Top UI/UX Design Trends Shaping Digital Products in 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.cardVersion4}>
              <div className={styles.text}>
                <div className={styles.textInner}>
                  <div className={styles.howToConductAUxAuditToIWrapper}>
                    <div className={styles.howToConduct}>
                      Measuring the ROI of User Experience Design
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.btnPrev} onClick={scrollLeft}>
            <Image 
              className={styles.arrowIcon} 
              width={48} 
              height={48} 
              alt="Previous" 
              src="/iconamoon_arrow-right-2-bold.png"
              style={{ transform: 'rotate(180deg)' }}
            />
          </div>
          <div className={styles.btnNext} onClick={scrollRight}>
            <Image 
              className={styles.arrowIcon} 
              width={48} 
              height={48} 
              alt="Next" 
              src="/iconamoon_arrow-right-2-bold.png" 
            />
          </div>
        </div>
      </div>

      <div className={styles.insightsCta}>
        <div className={styles.btn}>
          <div className={styles.getStarted}>Learn More</div>
          <Image 
            className={styles.solararrowRightUpLinearIcon} 
            width={24} 
            height={24} 
            alt="" 
            src="/solar_arrow-right-up-linear.svg" 
          />
        </div>
      </div>
    </div>
  );
};

export default InsightsFrame;