import type { NextPage } from 'next';
import styles from "../../styles/WhoWeAre_SubText.module.css";

const HeroSubtext: NextPage = () => {
  return (
    <div className={styles.heroSubtext}>
      <div className={styles.ourCollaborativeCreative}>
        Our collaborative, creative work culture fuels everything we design. By fostering an environment where ideas flow freely and innovation thrives, we empower our team to craft solutions that are as functional as they are beautiful. This approach not only leads to standout digital experiences but also ensures our clients feel supported and engaged at every step. Here, clients and team members alike benefit from a shared vision, where every project is an opportunity to make something impactful together.
      </div>
    </div>
  );
};

export default HeroSubtext;