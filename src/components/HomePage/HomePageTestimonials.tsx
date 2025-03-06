"use client";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/HomePageTestimonials.module.css";
import { useState } from "react";

// Testimonial data structure
interface Testimonial {
  quote: string;
  name: string;
  company: string;
  location: string;
  image: string;
}

const TestimonialsFrame: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "“Ideo Graphics has been an absolute pleasure to work with on multiple projects for my start-up. Their attention to detail and commitment to quality have consistently exceeded our expectations. Not only do they deliver exactly what we need, but they also bring their own innovations and creativity to the table, often enhancing our original ideas in ways we hadn’t considered. From understanding our vision to delivering polished, user-centred designs, the team at Ideo Graphics went above and beyond at every step. Highly recommend them for anyone looking to elevate their UI/UX to the next level!”",
      name: "Visal Suresh",
      company: "XSpine Tech",
      location: "Kochi",
      image: "/testimonial.png",
    },
    {
      quote:
        "“Another fantastic testimonial here. The team delivered exceptional results that transformed our user experience. Their professionalism and creativity are unmatched!”",
      name: "John Doe",
      company: "Tech Corp",
      location: "New York",
      image: "/testimonial2.png",
    },
    // Add more testimonials as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.testimonialsFrame}>
      <div className={styles.testmonialsContainer}>
        <div className={styles.testimonialTitle}>
          <div className={styles.testimonials}>Testimonials</div>
        </div>

        <div className={styles.clientTestimonials}>
          <div className={styles.container}>
            <p className={styles.ideoGraphicsHas}>
              {testimonials[currentIndex].quote}
            </p>

            <div className={styles.clientDetailContainer}>
              <div className={styles.clientImg}>
                <Image
                  className={styles.clientImgJpg}
                  width={99}
                  height={124}
                  alt="Client portrait"
                  src={testimonials[currentIndex].image}
                />
              </div>
              <div className={styles.rightClientDetails}>
                <div className={styles.visalSuresh}>
                  {testimonials[currentIndex].name}
                </div>
                <div className={styles.xspineTech}>
                  {testimonials[currentIndex].company}
                </div>
                <div className={styles.kochi}>
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.btnPrevBtnNext}>
            <button onClick={handlePrev} aria-label="Previous testimonial">
              <Image
                className={styles.btnPrevIcon}
                width={32}
                height={32}
                alt=""
                src="/btn-prev-icon.png"
              />
            </button>
            <button onClick={handleNext} aria-label="Next testimonial">
              <Image
                className={styles.btnNextIcon}
                width={32}
                height={32}
                alt=""
                src="/btn-next-icon.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsFrame;
