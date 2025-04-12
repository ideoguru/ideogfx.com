"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "../../styles/HomePageInsights.module.css";
import Link from "next/link";

const InsightsFrame: NextPage = () => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollRight = () => {
    if (cardsWrapperRef.current && !isScrolling) {
      setIsScrolling(true);

      const container = cardsWrapperRef.current;
      const containerWidth = container.offsetWidth;
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;

      // If near the end, reset to start (with smooth transition)
      if (scrollLeft + containerWidth >= scrollWidth - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: containerWidth,
          behavior: "smooth",
        });
      }

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 500);
    }
  };
  const scrollLeft = () => {
    if (cardsWrapperRef.current && !isScrolling) {
      setIsScrolling(true);
      const container = cardsWrapperRef.current;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;

      if (scrollLeft <= 10) {
        // Scroll to end if at the start
        container.scrollTo({
          left: container.scrollWidth - container.offsetWidth,
          behavior: "smooth",
        });
      } else {
        // Scroll left by one container width
        container.scrollBy({
          left: -containerWidth,
          behavior: "smooth",
        });
      }
      setTimeout(() => setIsScrolling(false), 500);
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
                      How to Conduct a UX Audit to Improve Your Product's
                      Usability
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
                      Why User Research is the Secret Ingredient for Building
                      Successful Digital Products
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
                      Top UI/UX Design Trends Shaping Digital Products in 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Only the Next button remains */}
          <div className={styles.btnPrev} onClick={scrollLeft}>
            <Image
              className={styles.arrowIcon}
              width={48}
              height={48}
              alt="Next"
              src="/prev-button.svg"
            />
          </div>
          <div className={styles.btnNext} onClick={scrollRight}>
            <Image
              className={styles.arrowIcon}
              width={48}
              height={48}
              alt="Next"
              src="/scroll-arrow.svg"
            />
          </div>
        </div>
      </div>

      <div className={styles.insightsCta}>
        <Link href="/Resources">
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
        </Link>
      </div>
    </div>
  );
};

export default InsightsFrame;
