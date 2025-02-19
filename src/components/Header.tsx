import Image from "next/image";
import styles from "../styles/HomePage.module.css";

const Header = () => {
  return (
    <div className={styles.frameParent16}>
      <div className={styles.asset18288x81Wrapper}>
        <Image
          className={styles.asset18288x81}
          width={48}
          height={44}
          alt="Logo"
          src="/logo.png"
        />
      </div>
      <div className={styles.frameParent17}>
        <div className={styles.whoWeAreWrapper}>
          <div className={styles.getStarted}>Who We Are</div>
        </div>
        <div className={styles.whatWeDoContainer}>
          <div className={styles.getStarted}>What We Do</div>
        </div>
        <div className={styles.insightsWrapper}>
          <div className={styles.getStarted}>Insights</div>
        </div>
        <div className={styles.whatWeDoContainer}>
          <div className={styles.getStarted}>Get In Touch</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
