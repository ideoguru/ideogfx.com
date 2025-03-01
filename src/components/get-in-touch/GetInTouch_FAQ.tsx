"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/GetInTouch_FAQ.module.css";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question:
        "1. How long does it take to get a response after I contact you?",
      answer:
        "We offer comprehensive digital design solutions including UI/UX design, web development, branding, and motion graphics.",
      icon: "/Group.svg",
    },
    {
      id: 2,
      question:
        "2. What details should I include in my message to get an accurate quote?",
      answer:
        "Project timelines vary based on complexity, but most projects range between 4-8 weeks from concept to delivery.",
      icon: "/Detail_Icon.svg",
    },
    {
      id: 3,
      question: "3. Do you work with startups and small businesses?",
      answer:
        "We offer both fixed-price and hourly-rate models depending on project requirements. Contact us for a detailed quote.",
      icon: "/Suitecase_Icon.svg",
    },
    {
      id: 4,
      question: "4. Can I schedule a call or meeting to discuss my project?",
      answer:
        "Yes, we provide maintenance packages and ongoing support for all our delivered projects.",
      icon: "/Calender_Icon.svg",
    },
    {
      id: 5,
      question:
        "5. I’m not sure exactly what I need. Can you help me figure it out?",
      answer:
        "Yes, we provide maintenance packages and ongoing support for all our delivered projects.",
      icon: "/Shake_Hand_Icon.svg",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${
                openFaq === item.id ? styles.active : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(item.id)}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt="Toggle"
                    className={`${styles.faqIcon} ${
                      openFaq === item.id ? styles.rotated : ""
                    }`}
                  />
                </div>
                <span className={styles.questionText}>{item.question}</span>
              </button>

              <div
                className={styles.faqAnswer}
                aria-expanded={openFaq === item.id}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
