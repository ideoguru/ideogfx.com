"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/GetInTouch_FAQ.module.css";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "1. How long does it take to get a response after I contact you?",
      answer:
        "We're excited to hear about your project! You can typically expect a response from our team within 24-48 business hours. We'll be in touch soon to discuss your design needs.",
      icon: "/Group.svg",
    },
    {
      id: 2,
      question: "2. What details should I include in my message to get an accurate quote?",
      answer:
        "To help us provide an accurate quote for your UI/UX design project, please tell us about your product or service, your target audience, any existing branding or design assets, the scope of work (e.g., website redesign, new app UI, specific features), and any initial ideas or inspiration you have. The more context you can provide, the better we can tailor our proposal!",
      icon: "/Detail_Icon.svg",
    },
    {
      id: 3,
      question: "3. Do you work with startups and small businesses?",
      answer:
        "Yes, definitely! We love partnering with startups and small businesses to create intuitive and engaging user experiences that help them succeed and make a strong impact in the market.",
      icon: "/Suitecase_Icon.svg",
    },
    {
      id: 4,
      question: "4. Can I schedule a call or meeting to discuss my project?",
      answer:
        "Absolutely! We find that a call or meeting is a great way to dive deeper into your UI/UX project goals. Please suggest a few times that work for you, or we can send over our availability to connect.",
      icon: "/Calender_Icon.svg",
    },
    {
      id: 5,
      question: "5. I'm not sure exactly what I need. Can you help me figure it out?",
      answer:
        "That's perfectly fine and very common! We can definitely help. We can start with a discovery session to understand your business objectives and user needs. From there, we can help define the scope and recommend the best UI/UX design solutions to achieve your vision.",
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
                    alt="Category"
                    className={styles.faqIcon}
                  />
                </div>
                <span className={styles.questionText}>{item.question}</span>
                <div className={styles.arrowWrapper}>
                  <Image
                    src="/dw_arrow.png"
                    width={24}
                    height={24}
                    alt="Toggle"
                    className={`${styles.arrowIcon} ${
                      openFaq === item.id ? styles.rotated : ""
                    }`}
                  />
                </div>
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
