"use client"; // Mark this component as a client component

import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/HomePageTestimonials.module.css";

const TestimonialsFrame: NextPage = () => {
  return (
    <div className={styles.testimonialsFrame}>
      <div className={styles.testmonialsContainer}>
        <div className={styles.testimonialTitle}>
          <div className={styles.testimonials}>Testimonials</div>
        </div>
        <div className={styles.clientTestimonials}>
          <div className={styles.container}>
            <div className={styles.ideoGraphicsHas}>
              “Ideo Graphics has been an absolute pleasure to work with on multiple projects for my start-up. Their attention to detail and commitment to quality have consistently exceeded our expectations. Not only do they deliver exactly what we need, but they also bring their own innovations and creativity to the table, often enhancing our original ideas in ways we hadn’t considered. From understanding our vision to delivering polished, user-centred designs, the team at Ideo Graphics went above and beyond at every step. Highly recommend them for anyone looking to elevate their UI/UX to the next level!”
            </div>
            <div className={styles.clientDetailContainer}>
              <div className={styles.clientImg}>
                <Image className={styles.clientImgJpg} width={99} height={124} alt="" src="/testimonial.png" />
              </div>
              <div className={styles.rightClientDetails}>
                <div className={styles.visalSuresh}>Visal Suresh</div>
                <div className={styles.xspineTech}>XSpine Tech</div>
                <div className={styles.kochi}>Kochi</div>
              </div>
            </div>
          </div>
          <div className={styles.btnPrevBtnNext}>
            <div className={styles.btnPrev}>
              <Image className={styles.btnPrevIcon} width={32} height={32} alt="" src="/btn-prev-icon.png" />
            </div>
            <Image className={styles.btnNextIcon} width={32} height={32} alt="" src="/btn-next-icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsFrame;