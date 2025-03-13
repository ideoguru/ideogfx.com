"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/WhtWeDo_whtWeDo.module.css";

const WhatWeDoFrame: React.FC = () => {
  const [hoveredService, setHoveredService] = useState(
    "UI/UX Designing and Prototyping"
  );

  const servicesData = {
    "UI/UX Designing and Prototyping": {
      image: "/whtwedo7.png",
      description: {
        title: "UI/UX Designing and Prototyping",
        content: "Transform ideas into high-impact digital experiences with user-centric design and interactive prototyping. We craft visually stunning, functional interfaces tailored to your audience.",
        details: [
          "User Research & Analysis: Deep-dive into your audience's behaviors and preferences to build products that resonate.",
          "Information Architecture & Wireframing: Structure your product for easy navigation and optimal user flow.",
          "Interactive Prototyping: Visualize and test interactions to ensure a seamless user experience.",
          "High-Fidelity Design: Bring your vision to life with visually compelling, brand-aligned design.",
          "Usability Testing: Validate your design with real users to refine and optimize functionality.",
          "Development Support & Collaboration: Collaborate seamlessly with development teams for a smooth design-to-development transition.",
        ],
      },
    },
    "Websites and Apps Designing": {
      image: "/wht_we_do_2.png",
      description: {
        title: "Websites and Apps Designing",
        content: "Create stunning, responsive websites and apps that deliver exceptional user experiences. We focus on intuitive navigation, seamless functionality, and modern design.",
        details: [
          "Responsive Design: Ensure your website or app looks great on all devices.",
          "User-Centered Design: Focus on user needs and behaviors to create intuitive interfaces.",
          "Performance Optimization: Build fast, efficient, and scalable digital products.",
          "Cross-Browser Compatibility: Ensure your product works seamlessly across all major browsers.",
          "SEO-Friendly Design: Optimize your website for search engines to drive organic traffic.",
        ],
      },
    },
    "Redesigning UI/UX": {
      image: "/wht_we_do_3.png",
      description: {
        title: "Redesigning UI/UX",
        content: "Revamp outdated designs to improve usability, aesthetics, and overall user satisfaction. We breathe new life into your digital products.",
        details: [
          "Audit Existing Designs: Identify pain points and areas for improvement.",
          "Modernize Aesthetics: Update the look and feel to align with current design trends.",
          "Improve Usability: Enhance navigation and user flow for better engagement.",
          "Optimize Performance: Ensure the redesign improves load times and responsiveness.",
          "User Testing: Validate the redesign with real users to ensure it meets their needs.",
        ],
      },
    },
    "UI/UX Design Audits": {
      image: "/wht_we_do_4.png",
      description: {
        title: "UI/UX Design Audits",
        content: "Evaluate and improve your existing designs with comprehensive UI/UX audits. We identify usability issues and provide actionable recommendations.",
        details: [
          "Heuristic Evaluation: Assess your design against usability best practices.",
          "Accessibility Audit: Ensure your product is accessible to all users.",
          "Performance Review: Identify and fix performance bottlenecks.",
          "Consistency Check: Ensure design consistency across all screens.",
          "Actionable Recommendations: Provide clear steps for improvement.",
        ],
      },
    },
    "Usability Testing & Optimization": {
      image: "/wht_we_do_5.png",
      description: {
        title: "Usability Testing & Optimization",
        content: "Test your product with real users to uncover pain points and optimize the user experience for better engagement and satisfaction.",
        details: [
          "User Testing Sessions: Conduct tests with real users to gather feedback.",
          "Heatmaps & Analytics: Analyze user behavior to identify issues.",
          "A/B Testing: Compare design variations to determine the best-performing option.",
          "Iterative Improvements: Continuously refine the design based on feedback.",
          "Conversion Rate Optimization: Improve key metrics like sign-ups and purchases.",
        ],
      },
    },
    "User Research and Behavior Analysis": {
      image: "/wht_we_do_7.png",
      description: {
        title: "User Research and Behavior Analysis",
        content: "Understand your users deeply through research and behavior analysis. We help you create products that truly resonate with your audience.",
        details: [
          "User Interviews: Conduct one-on-one interviews to gather insights.",
          "Surveys & Questionnaires: Collect quantitative data from your users.",
          "Behavioral Analytics: Analyze how users interact with your product.",
          "Persona Development: Create detailed user personas to guide design decisions.",
          "Journey Mapping: Visualize the user journey to identify pain points.",
        ],
      },
    },
    "Design Systems and Branding": {
      image: "/wht_we_do_8.png",
      description: {
        title: "Design Systems and Branding",
        content: "Create cohesive design systems and branding that ensure consistency and strengthen your brand identity across all touchpoints.",
        details: [
          "Design Tokens: Define reusable design elements like colors and typography.",
          "Component Libraries: Build a library of reusable UI components.",
          "Brand Guidelines: Establish rules for consistent brand representation.",
          "Style Guides: Document design standards for easy reference.",
          "Cross-Platform Consistency: Ensure a unified look and feel across all platforms.",
        ],
      },
    },
    "Conversion Rate Optimization (CRO)": {
      image: "/wht_we_do_9.png",
      description: {
        title: "Conversion Rate Optimization (CRO)",
        content: "Optimize your product to drive higher conversions and achieve your business goals. We focus on improving key metrics like sign-ups, purchases, and engagement.",
        details: [
          "Funnel Analysis: Identify drop-off points in your conversion funnel.",
          "A/B Testing: Test variations to determine the best-performing design.",
          "Landing Page Optimization: Improve landing pages for higher conversions.",
          "Call-to-Action (CTA) Optimization: Design effective CTAs to drive action.",
          "User Feedback Integration: Use user feedback to refine the design.",
        ],
      },
    },
  };

  const serviceGroups = [
    ["UI/UX Designing and Prototyping", "Websites and Apps Designing", "Redesigning UI/UX"],
    ["UI/UX Design Audits", "Usability Testing & Optimization", "User Research and Behavior Analysis"],
    ["Design Systems and Branding", "Conversion Rate Optimization (CRO)"]
  ];

  return (
    <div className={styles.whatWeDoFrame}>
      <div className={styles.whatWeDoContainer}>
        <div className={styles.headingSubheading}>
          <h1 className={styles.heading}>What We Do?</h1>
          <p className={styles.subheading}>
            Explore our range of tailored UI/UX design services aimed at helping startups, SMEs, and enterprises create digital products that stand out. From product design to brand identity, we’re your partner in user-centric growth. Here's a breakdown of what we offer:
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.bodyContainer}>
            <div className={styles.servicesMenuFrame}>
              {serviceGroups.map((group, groupIndex) => (
                <div className={styles.servicesContainer} key={groupIndex}>
                  {group.map((service) => (
                    <button
                      key={service}
                      className={`${styles.serviceTab} ${hoveredService === service ? styles.active : ""
                        }`}
                      onMouseEnter={() => setHoveredService(service)}
                    >
                      <span className={styles.serviceText}>{service}</span>
                      <div className={styles.arrow}>
                        <Image
                          src="/Intersect1.png"
                          width={17}
                          height={17}
                          alt=""
                          className={`${styles.arrowIcon} ${hoveredService === service ? styles.activeArrow : ""
                            }`}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.descriptionContainer}>
              <div
                className={styles.leftColumnCard}
                style={{ backgroundImage: `url(${servicesData[hoveredService].image})` }}
              >
                <div className={styles.textCard}>
                  <h2 className={styles.serviceTitle}>{servicesData[hoveredService].description.title}</h2>
                  <p className={styles.serviceContent}>{servicesData[hoveredService].description.content}</p>
                </div>
              </div>

              <div className={styles.rightColumnDescription}>
                {servicesData[hoveredService].description.details.map((detail, index) => (
                  <div key={index} className={styles.detailItem}>
                    <div className={styles.detailBullet} />
                    <p className={styles.detailText}>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoFrame;