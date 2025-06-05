import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/WhtweDo_WhyWorkWithUs.module.css";

const Container: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.whyWorkWithContainer}>
          <p className={styles.why}>Why</p>
          <p className={styles.why}>Work With</p>
          <p className={styles.why}>Us?</p>
        </div>
      </div>
      <div className={styles.img}>
        <Image
          className={styles.imgChild}
          width={150}
          height={200}
          alt=""
          src="/whtwedo8.png"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.ourApproachTo}>
          Our approach to UI/UX design combines creativity, data-driven insights, and a focus on user needs. By partnering with us, you’re choosing an agency that’s committed to helping you build digital products that resonate with your audience, drive growth, and elevate your brand.
        </div>
      </div>
    </div>
  );
};

export default Container;