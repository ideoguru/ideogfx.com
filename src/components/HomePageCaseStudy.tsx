"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/HomePageCaseStudy.module.css";

const caseStudies = [
  {
    title: "Order Management System : Offline to Online Transformation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna sit non et tellus. Tristique nunc nisi neque rhoncus nam viverra orci. Eleifend viverra viverra mi rhoncus elementum. Nisl id egestas proin cras porttitor.",
    mainImage: "/Case_Studies_Card.png", // Main card image
    card1: {
      title:
        "Personalised Business Accounting : Offline to Online Transformation",
      image: "/Rectangle_91.png",
    },
    card2: {
      title: "The UX Edge: Transforming User Experience into Business Value",
      image: "/Rectangle_81.png",
    },
  },
  {
    title: "Another Case Study Title",
    description:
      "This is another example description for a case study. It demonstrates how we transformed a business.",
    mainImage: "/card_version_6.jpg", // Main card image
    card1: {
      title: "Card 1 Title for Another Case Study",
      image: "/wht_we_do_7.png",
    },
    card2: {
      title: "Card 2 Title for Another Case Study",
      image: "/wht_we_do_8.png",
    },
  },
];

const CaseStudiesFrame: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const currentCaseStudy = caseStudies[currentIndex];

  return (
    <div className={styles.caseStudiesFrame}>
      <div className={styles.caseStudiesTitles}>
        <div className={styles.caseStudiesWrapper}>
          <div className={styles.caseStudies}>Case Studies</div>
        </div>
      </div>
      <div
        className={styles.caseStudiesCard}
        style={{
          backgroundImage: `url(${currentCaseStudy.mainImage})`,
        }}
      >
        <div className={styles.caseStudiesContainer}>
          <div className={styles.leftColumnText}>
            <div className={styles.orderManagementSystemOfflParent}>
              <div className={styles.orderManagementSystem}>
                {currentCaseStudy.title}
              </div>
              <div className={styles.loremIpsumDolor}>
                {currentCaseStudy.description}
              </div>
            </div>
            <div className={styles.instanceParent}>
              <div
                className={styles.iconamoonarrowRight2BoldWrapper}
                onClick={handlePrev}
              >
                <Image
                  className={styles.iconamoonarrowRight2Bold}
                  width={32}
                  height={32}
                  alt="Previous"
                  src="/iconamoon_arrow-left-2-bold.svg"
                />
              </div>
              <Image
                className={styles.frameChild}
                width={32}
                height={32}
                alt="Next"
                src="/iconamoon_arrow-right-2-bold.svg"
                onClick={handleNext}
              />
            </div>
          </div>
          <div className={styles.rightColumnCards}>
            <div
              className={styles.card1}
              style={{
                backgroundImage: `url(${currentCaseStudy.card1.image})`,
              }}
            >
              <div className={styles.personalisedBusinessAccounti}>
                {currentCaseStudy.card1.title}
              </div>
            </div>
            <div
              className={styles.card2}
              style={{
                backgroundImage: `url(${currentCaseStudy.card2.image})`,
              }}
            >
              <div className={styles.personalisedBusinessAccounti}>
                {currentCaseStudy.card2.title}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.caseStudiesCtaFrame}>
        <div className={styles.caseStudiesButton}>
          <div className={styles.getStarted}>Learn More</div>
          <Image
            className={styles.solararrowRightUpLinearIcon}
            width={24}
            height={24}
            alt="Learn More"
            src="/solar_arrow-right-up-linear.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesFrame;
