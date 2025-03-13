"use client";
import { useState, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import styles from "../../styles/WhatWeDo_HowWeDo.module.css";

interface Step {
  id: number;
  title: string;
  content: [string, string[]];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery & Research: The Deep Dive",
    content: [
      "First, we roll up our sleeves and get to know you, your goals, and your audience:",
      [
        "Client Goals: We chat with stakeholders to uncover what really matters to you.",
        "User Research: By connecting with your users through interviews and surveys, we identify exactly what they need.",
        "Market Research: A peek at the industry and competitors keeps us ahead of the curve."
      ]
    ]
  },
  {
    id: 2,
    title: "Define Problem & Set Requirements: Setting the Stage",
    content: [
      "Now, we get a little scientific, nailing down the essentials that'll shape your project:",
      [
        "Target Audiences & Segmentation: Who's your dream user? We dig deep to define and segment them.",
        "Personas & User Stories: A day in the life of your users, all mapped out.",
        "Problem Definition & Requirements: We zero in on the challenges and clarify exactly what the product must deliver."
      ]
    ]
  },
  {
    id: 3,
    title: "Information Architecture (IA): The Blueprint",
    content: [
      "Here, we sketch out the roadmap for success:",
      [
        "Site Mapping: Structuring the site so everything flows naturally.",
        "Content Strategy: Planning purposeful, user-focused content for every page.",
        "User Flows: Mapping out paths for your users so they reach their goals without a hitch."
      ]
    ]
  },
  {
    id: 4,
    title: "Wireframing & Prototyping: Building the Bones",
    content: [
      "Time to bring ideas to life in skeletal form:",
      [
        "Wireframes: Simple, low-fidelity sketches for basic layout.",
        "Interactive Prototypes: Testing interactions in action, even before visuals.",
        "User Testing (Low-Fidelity): Early feedback from users means we're on the right track from the start!"
      ]
    ]
  },
  {
    id: 5,
    title: "Visual Design: Adding the Magic",
    content: [
      "This is where the wow factor comes in:",
      [
        "Moodboards & Style Guides: Defining a look that's uniquely you.",
        "High-Fidelity Mockups: Realistic designs that showcase your brand and style.",
        "Responsive Design: Making sure it looks fab on every screen size.",
        "Design Feedback: Your input guides our tweaks and ensures we nail the final look."
      ]
    ]
  },
  {
    id: 6,
    title: "Prototype Testing & Validation: Making Sure it Works",
    content: [
      "We test, refine, and polish until it's perfect:",
      [
        "High-Fidelity Prototype: A clickable, near-final version to test the experience.",
        "User Testing (High-Fidelity): We see real users in action and tweak accordingly.",
        "Iterate on Feedback: Your users' thoughts fuel our finishing touches!"
      ]
    ]
  },
  {
    id: 7,
    title: "Copywriting & SEO: Putting Words to the Magic",
    content: [
      "Lastly, we craft the copy that brings it all together, with SEO goodness baked in for maximum reach.",
      []
    ]
  }
];

const HowWeDoFrame: NextPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const rightColumn = rightColumnRef.current;
    if (!rightColumn) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isProgrammaticScroll.current) {
            const id = Number(entry.target.getAttribute('data-step-id'));
            setActiveTab(id);
          }
        });
      },
      {
        root: rightColumn,
        rootMargin: '0px',
        threshold: 0.6
      }
    );

    contentRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      contentRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    if (contentRefs.current[activeTab - 1] && rightColumnRef.current) {
      isProgrammaticScroll.current = true;
      const element = contentRefs.current[activeTab - 1];
      if (element) {
        const topPos = element.offsetTop - rightColumnRef.current.offsetTop - 32;
        rightColumnRef.current.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
      }
      
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);
    }
  }, [activeTab]);

  return (
    <div className={styles.howWeDoFrame}>
      <div className={styles.howeWeDoContainer}>
        <div className={styles.headingSubheading}>
          <div className={styles.heading}>
            <div className={styles.howWeDo}>How We Do?</div>
          </div>
          <div className={styles.subheading}>
            <div className={styles.creatingExceptionalDigital}>
              Creating exceptional digital products is our passion and we have a fun, 
              flexible process that keeps it seamless. Ready to know our secret sauce? 
              Here's how we turn your vision into reality with a smile (and plenty of coffee):
            </div>
          </div>
        </div>
        <div className={styles.scrollspy}>
          <div className={styles.leftColumn}>
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`${styles.item} ${activeTab === step.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(step.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab(step.id)}
                aria-selected={activeTab === step.id}
              >
                <div className={styles.discoveryResearch}>{step.title}</div>
              </div>
            ))}
          </div>
          <div 
            className={styles.scrollspyRightColumn} 
            ref={rightColumnRef}
          >
            {steps.map((step, index) => (
              <div 
                key={step.id}
                ref={el => {
                  contentRefs.current[index] = el;
                  if (el) el.setAttribute('data-step-id', String(step.id));
                }}
                className={styles.scrollableListitem01}
              >
                <div className={styles.wrapper}>
                  <i className={styles.i}>{String(step.id).padStart(2, '0')}</i>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.discoveryResearchTheDeepParent}>
                    <div className={styles.discoveryResearch1}>{step.title}</div>
                    <div className={styles.firstWeRoll}>{step.content[0]}</div>
                  </div>
                  {step.content[1].length > 0 && (
                    <div className={styles.clientGoalsWeChatWithStaParent}>
                      {step.content[1].map((item, i) => (
                        <div key={i} className={styles.clientGoalsWe}>{item}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoFrame;