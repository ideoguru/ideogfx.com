"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/HomePageWhatWeDo.module.css";
import Link from "next/link";

const ArrowIcon: React.FC = () => (
  <Image width={17} height={17} alt="Arrow icon" src="/Intersect.svg" />
);

const WhatWeDoFrame: NextPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      text: "UI/UX Designing and Prototyping",
      image: "/wht_we_do_first.png",
      title: "Bring Your Vision to Life",
      description:
        "We craft user-centric UI/UX designs and interactive prototypes that bring your ideas to life. Our process ensures smooth navigation, engaging aesthetics, and seamless functionality. So users love your product from the first interaction.",
    },
    {
      text: "Websites and Apps Designing",
      image: "/wht_we_do_2.png",
      title: "Revamp Your Digital Presence",
      description:
        "Is your website or app feeling outdated? We modernize your UI/UX, aligning it with current trends and user expectations to improve engagement and usability.",
    },
    {
      text: "Redesigning UI/UX",
      image: "/wht_we_do_3.png",
      title: "Upgrade Your Digital Presence",
      description:
        "Outdated website? We refresh your digital platforms, giving them a modern look and feel that meets user expectations and industry trends.",
    },
    {
      text: "UI/UX Design Audits",
      image: "/wht_we_do_4.png",
      title: "Pinpoint Problems & Fix Them",
      description:
        "Already have a website or app? Let us evaluate it! Our UI/UX audits identify pain points and offer smart, actionable fixes to enhance usability, engagement, and conversion rates.",
    },
    {
      text: "Usability Testing & Optimization",
      image: "/wht_we_do_5.png",
      title: "Fine-Tune Your Product for Success",
      description:
        "A great design isn’t just about looks—it’s about usability. We conduct in-depth usability testing to ensure your digital product is intuitive, accessible, and frictionless.",
    },
    {
      text: "User Research and Behavior Analysis",
      image: "/wht_we_do_7.png",
      title: "Know Your Users, Build for Success",
      description:
        "We deep dive into user behaviors, pain points, and needs to craft data-driven digital experiences that truly resonate.",
    },
    {
      text: "Design Systems and Branding",
      image: "/wht_we_do_8.png",
      title: "Consistency That Scales",
      description:
        "A strong brand identity creates trust and recognition. We develop design systems that ensure your UI/UX remains consistent across every touchpoint.",
    },
    {
      text: "Conversion Rate Optimization (CRO)",
      image: "/wht_we_do_9.png",
      title: "Turn Clicks into Customers",
      description:
        "Get more from your website or app by optimizing its design, content, and user flow to boost conversions.",
    },
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
                {hoveredService !== null
                  ? services[hoveredService].title
                  : services[0].title}
              </div>
              <div className={styles.weCraftUserCentric}>
                {hoveredService !== null
                  ? services[hoveredService].description
                  : services[0].description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whatWeDoCta}>
        <Link href="/what-we-do">
          <div className={styles.btnLearnMore}>
            <div className={styles.getStarted}>Learn More</div>
            <Image
              width={24}
              height={24}
              alt="Learn More"
              src="/solar_arrow-right-up-linear.svg"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatWeDoFrame;
