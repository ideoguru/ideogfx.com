import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/WhoWeAreStartingPage.module.css";

const HeroFrame: NextPage = () => {
  return (
    <div className={styles.heroFrame}>
      <div className={styles.container}>
        <Image className={styles.heroImage} width={500} height={450} alt="" src="/whoweare1.png" />
        <div className={styles.meetTheMindsContainer}>
          <p className={styles.meetTheMinds}>{`Meet the Minds Behind the Magic of Designing Digital Experiences with `}</p>
          <p className={styles.meetTheMinds}>Heart, Strategy, and Innovation</p>
        </div>
        <Image
          className={styles.scrollDownIcon}
          width={48}
          height={55}
          alt="Scroll down"
          src="/Group166.png"
        />
      </div>
    </div>
  );
};

export default HeroFrame;