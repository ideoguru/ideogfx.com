import { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/GetInTouch_Hero.module.css";

const GetInTouchFrame: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Bold and Bigger Title */}
        <h1 className={styles.title}>
          <span>Let’s Build Something Great</span>
          <span>Together!</span>
        </h1>

        {/* Gradient Text */}
        <div className={styles.gradientText}>
          Have Any <br />
          Questions?
        </div>

        {/* Bold and Bigger Subtitle */}
        <p className={styles.subtitle}>We’d Love to Hear From You!</p>

        {/* Image Positioned Correctly */}
        <Image
          className={styles.contactSupportImage}
          alt="Material symbols"
          src="/get_in_touch_hero.png"
          width={372}
          height={372}
          priority // Optional: Prioritize loading for above-the-fold images
        />
      </div>
    </div>
  );
};

export default GetInTouchFrame;
