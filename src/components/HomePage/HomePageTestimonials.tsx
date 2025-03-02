"use client";
import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/HomePageTestimonials.module.css";

const TestimonialsFrame: NextPage = () => {
  return (
    <div className={styles.testimonialsFrame}>
      <div className={styles.testmonialsContainer}>
        {/* Left-aligned Heading */}
        <div className={styles.testimonialTitle}>
          <div className={styles.testimonials}>Testimonials</div>
        </div>

        {/* Centered Content Block */}
        <div className={styles.clientTestimonials}>
          <div className={styles.container}>
            <p className={styles.ideoGraphicsHas}>
              “Ideo Graphics has been an absolute pleasure to work with on multiple projects for my start-up. Their attention to detail and commitment to quality have consistently exceeded our expectations. Not only do they deliver exactly what we need, but they also bring their own innovations and creativity to the table, often enhancing our original ideas in ways we hadn’t considered. From understanding our vision to delivering polished, user-centred designs, the team at Ideo Graphics went above and beyond at every step. Highly recommend them for anyone looking to elevate their UI/UX to the next level!”
            </p>

            <div className={styles.clientDetailContainer}>
              <div className={styles.clientImg}>
                <Image
                  className={styles.clientImgJpg}
                  width={99}
                  height={124}
                  alt="Client portrait"
                  src="/testimonial.png"
                />
              </div>
              <div className={styles.rightClientDetails}>
                <div className={styles.visalSuresh}>Visal Suresh</div>
                <div className={styles.xspineTech}>XSpine Tech</div>
                <div className={styles.kochi}>Kochi</div>
              </div>
            </div>
          </div>

          {/* Centered Navigation Buttons */}
          <div className={styles.btnPrevBtnNext}>
            <button aria-label="Previous testimonial">
              <Image
                className={styles.btnPrevIcon}
                width={32}
                height={32}
                alt=""
                src="/btn-prev-icon.png"
              />
            </button>
            <button aria-label="Next testimonial">
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