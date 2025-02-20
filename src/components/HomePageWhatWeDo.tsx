"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "./../styles/HomePageWhatWeDo.module.css";

const ArrowIcon: React.FC = () => (
  <Image width={17} height={17} alt="Arrow icon" src="/Intersect.svg" />
);

const WhatWeDoFrame: NextPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    { text: "UI/UX Designing and Prototyping", image: "/wht_we_do_first.png" },
    { text: "Websites and Apps Designing", image: "/wht_we_do_2.png" },
    { text: "Redesigning UI/UX", image: "/wht_we_do_3.png" },
    { text: "UI/UX Design Audits", image: "/wht_we_do_4.png" },
    { text: "Usability Testing & Optimization", image: "/wht_we_do_5.png" },
    { text: "User Research and Behavior Analysis", image: "/wht_we_do_7.png" },
    { text: "Design Systems and Branding", image: "/wht_we_do_8.png" },
    { text: "Conversion Rate Optimization (CRO)", image: "/wht_we_do_9.png" },
  ];

  return (
    <div className={styles.whatWeDoFrame}>
      <div className={styles.whatWeDoContainer}>
        <div className={styles.whatWeDoTitleFrame}>
          <div className={styles.whatWeDo}>What We Do</div>
        </div>
        <div className={styles.serviceshomePage}>
          <div className={styles.leftColumnServiceList}>
            {services.map((service, index) => (
              <div
                key={index}
                className={styles.serviceItem}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={styles.serviceText}>{service.text}</div>
                <div className={styles.arrow}>
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                width={568}
                height={604}
                alt="Service Image"
                src={
                  hoveredService !== null
                    ? services[hoveredService].image
                    : "/wht_we_do_first.png"
                }
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.bringYourVision}>
                Bring Your Vision to Life
              </div>
              <div className={styles.weCraftUserCentric}>
                We craft user-centric UI/UX designs and interactive prototypes
                that bring your ideas to life. Our process ensures smooth
                navigation, engaging aesthetics, and seamless functionality. So
                users love your product from the first interaction.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whatWeDoCta}>
        <div className={styles.btnLearnMore}>
          <div className={styles.getStarted}>Learn More</div>
          <Image
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

export default WhatWeDoFrame;
