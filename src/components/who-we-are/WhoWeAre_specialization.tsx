import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/WhoWeAre_specialization.module.css";

const OurSpecification: NextPage = () => {
  return (
    <div className={styles.ourSpecification}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.ourSpecialization}>Our Specialization</div>
        </div>
        <div className={styles.descriptionContent}>
          <div className={styles.bgImage}>
            <div className={styles.digitalPenEllipseChild} />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.weSpecializeIn}>
              We specialize in crafting user-focused digital solutions that
              combine strategic insights, creativity, and technical precision.
              From in-depth user research and sleek, high-impact designs to
              seamless UX audits and brand identity development, we cover the
              full spectrum of digital product needs. With a team of skilled
              experts in product design, UX, and branding, our process is built
              to not only meet but exceed client expectations. Every project is
              tailored, tested, and optimized for real-world success, ensuring
              that your vision resonates with users and stands out in the
              digital landscape.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecification;
